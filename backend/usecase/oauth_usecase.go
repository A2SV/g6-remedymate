package usecase

// import (
// 	"context"
// 	"fmt"
// 	"log"
// 	"time"

// 	"remedymate-backend/domain/dto"
// 	"remedymate-backend/domain/entities"
// 	"remedymate-backend/domain/interfaces"
// 	"remedymate-backend/infrastructure/auth"
// )

// // OAuthUsecase implements IOAuthUsecase interface
// type OAuthUsecase struct {
// 	oauthService *auth.OAuthService
// 	userRepo     interfaces.IOAuthRepository
// }

// // NewOAuthUsecase creates a new OAuth usecase instance
// func NewOAuthUsecase(oauthService *auth.OAuthService, userRepo interfaces.IOAuthRepository) *OAuthUsecase {
// 	return &OAuthUsecase{
// 		oauthService: oauthService,
// 		userRepo:     userRepo,
// 	}
// }

// // GetAuthURL generates the OAuth authorization URL for a specific provider
// func (uc *OAuthUsecase) GetAuthURL(ctx context.Context, provider string) (*dto.OAuthURLResponseDTO, error) {
// 	authURL, state, err := uc.oauthService.GetAuthURL(provider)
// 	if err != nil {
// 		return nil, fmt.Errorf("failed to generate auth URL: %w", err)
// 	}

// 	return &dto.OAuthURLResponseDTO{
// 		AuthURL: authURL,
// 		State:   state,
// 	}, nil
// }

// // HandleCallback processes the OAuth callback and authenticates the user
// func (uc *OAuthUsecase) HandleCallback(ctx context.Context, provider string, callback dto.OAuthCallbackDTO) (*dto.OAuthResponseDTO, error) {
// 	log.Printf("🔄 Starting OAuth callback processing for provider: %s", provider)

// 	// Exchange authorization code for access token
// 	log.Printf("🔄 Exchanging authorization code for access token...")
// 	token, err := uc.oauthService.ExchangeCodeForToken(ctx, provider, callback.Code)
// 	if err != nil {
// 		log.Printf("❌ Failed to exchange code for token: %v", err)
// 		return nil, fmt.Errorf("failed to exchange code for token: %w", err)
// 	}
// 	log.Printf("✅ Successfully exchanged code for access token")

// 	// Get user information from the OAuth provider
// 	log.Printf(" Fetching user info from %s...", provider)
// 	user, err := uc.oauthService.GetUserInfo(ctx, provider, token)
// 	if err != nil {
// 		log.Printf("❌ Failed to get user info from %s: %v", provider, err)
// 		return nil, fmt.Errorf("failed to get user info: %w", err)
// 	}
// 	log.Printf("✅ Successfully retrieved user info from %s: %s (%s)", provider, user.Username, user.Email)

// 	// Check if user already exists
// 	log.Printf("🔍 Checking if user already exists...")
// 	existingUser, err := uc.userRepo.FindByOAuthProvider(ctx, provider, user.OAuthProviders[0].ID)
// 	if err != nil {
// 		log.Printf("❌ Error checking existing user: %v", err)
// 		return nil, fmt.Errorf("failed to check existing user: %w", err)
// 	}

// 	if existingUser == nil {
// 		log.Printf("👤 User not found by OAuth provider, checking by email...")

// 		// Check if user exists with same email
// 		if user.Email != "" {
// 			existingUser, err = uc.userRepo.FindByEmail(ctx, user.Email)
// 			if err != nil {
// 				log.Printf("❌ Error checking email: %v", err)
// 				return nil, fmt.Errorf("failed to check email: %w", err)
// 			}

// 			if existingUser != nil {
// 				log.Printf("🔗 Found existing user by email: %s, linking OAuth provider", existingUser.Email)
// 				// User exists with email, add OAuth provider
// 				existingUser.OAuthProviders = append(existingUser.OAuthProviders, user.OAuthProviders[0])
// 				existingUser.LastLogin = time.Now()
// 				existingUser.IsVerified = true

// 				log.Printf("🔄 Updating existing user with OAuth provider...")
// 				if err := uc.userRepo.UpdateUser(ctx, *existingUser); err != nil {
// 					log.Printf("❌ Failed to update user: %v", err)
// 					return nil, fmt.Errorf("failed to update user: %w", err)
// 				}
// 				log.Printf("✅ Successfully updated existing user with OAuth provider")
// 				user = existingUser
// 			} else {
// 				log.Printf("🆕 Creating new user with OAuth authentication...")
// 				// Create new user
// 				if err := uc.userRepo.InsertUser(ctx, *user); err != nil {
// 					log.Printf("❌ Failed to create user: %v", err)
// 					return nil, fmt.Errorf("failed to create user: %w", err)
// 				}
// 				log.Printf("✅ Successfully created new user: %s (%s)", user.Username, user.ID)
// 			}
// 		} else {
// 			log.Printf("🆕 Creating new user without email...")
// 			// Create new user without email
// 			if err := uc.userRepo.InsertUser(ctx, *user); err != nil {
// 				log.Printf("❌ Failed to create user: %v", err)
// 				return nil, fmt.Errorf("failed to create user: %w", err)
// 			}
// 			log.Printf("✅ Successfully created new user: %s (%s)", user.Username, user.ID)
// 		}
// 	} else {
// 		log.Printf("👤 Found existing user by OAuth provider: %s (%s)", existingUser.Username, existingUser.ID)
// 		// Update existing user's last login
// 		existingUser.LastLogin = time.Now()
// 		log.Printf("🔄 Updating last login for existing user...")
// 		if err := uc.userRepo.UpdateUser(ctx, *existingUser); err != nil {
// 			log.Printf("❌ Failed to update user: %v", err)
// 			return nil, fmt.Errorf("failed to update user: %w", err)
// 		}
// 		log.Printf("✅ Successfully updated last login for existing user")
// 		user = existingUser
// 	}

// 	// Generate JWT token
// 	log.Printf("🔑 Generating JWT token for user: %s", user.ID)
// 	jwtToken, err := uc.oauthService.GetJWTService().GenerateToken(*user)
// 	if err != nil {
// 		log.Printf("❌ Failed to generate JWT token: %v", err)
// 		return nil, fmt.Errorf("failed to generate JWT token: %w", err)
// 	}
// 	log.Printf("✅ Successfully generated JWT token")

// 	log.Printf("🎉 OAuth authentication completed successfully for user: %s (%s)", user.Username, user.ID)
// 	return &dto.OAuthResponseDTO{
// 		AccessToken:  jwtToken,
// 		RefreshToken: "", // You might want to implement refresh tokens
// 		User:         user,
// 		Message:      "Authentication successful",
// 	}, nil
// }

// // ValidateToken validates a JWT token and returns user information
// func (uc *OAuthUsecase) ValidateToken(ctx context.Context, token string) (*entities.User, error) {
// 	claims, err := uc.oauthService.GetJWTService().ValidateToken(token)
// 	if err != nil {
// 		return nil, fmt.Errorf("invalid token: %w", err)
// 	}

// 	user, err := uc.userRepo.FindByID(ctx, claims.UserID)
// 	if err != nil {
// 		return nil, fmt.Errorf("user not found: %w", err)
// 	}

// 	if user == nil {
// 		return nil, fmt.Errorf("user not found")
// 	}

// 	return user, nil
// }

// // RefreshToken refreshes an expired access token
// func (uc *OAuthUsecase) RefreshToken(ctx context.Context, refreshToken string) (*dto.OAuthResponseDTO, error) {
// 	// For now, we'll just validate the token and generate a new one
// 	// In a real implementation, you'd want to use a separate refresh token
// 	user, err := uc.ValidateToken(ctx, refreshToken)
// 	if err != nil {
// 		return nil, fmt.Errorf("invalid refresh token: %w", err)
// 	}

// 	// Generate new JWT token
// 	jwtToken, err := uc.oauthService.GetJWTService().GenerateToken(*user)
// 	if err != nil {
// 		return nil, fmt.Errorf("failed to generate new JWT token: %w", err)
// 	}

// 	return &dto.OAuthResponseDTO{
// 		AccessToken:  jwtToken,
// 		RefreshToken: refreshToken, // Keep the same refresh token for now
// 		User:         user,
// 		Message:      "Token refreshed successfully",
// 	}, nil
// }
