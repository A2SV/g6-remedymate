import { Button } from '../ui/button'

const PasswordChange = () => {
  return (
    <form className="flex flex-col gap-3 w-full">
      <div className="flex flex-col">
        <label htmlFor="currentPassword" className="text-sm font-bold mb-1">
          Current Password
        </label>
        <input
          id="currentPassword"
          type="password"
          placeholder="Enter current password"
          className="w-full h-9 rounded-lg p-2 text-sm border"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="newPassword" className="text-sm font-bold mb-1">
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          className="w-full h-9 rounded-lg p-2 text-sm border"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="text-sm font-bold mb-1">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          className="w-full h-9 rounded-lg p-2 text-sm border"
        />
      </div>

      <Button
        type="submit"
        className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-4 py-2 rounded-lg w-full sm:w-auto"
      >
        Change Password
      </Button>
    </form>
  )
}

export default PasswordChange
