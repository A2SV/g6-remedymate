import AdminHeader from "@/components/admin/AdminHeader";
import Account from "@/components/Profile/Account";
import Activity from "@/components/Profile/Activity";
import ProfileForm from "@/components/Profile/ProfileForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fetchUserProfile } from "@/actions/profile";
import { Profile } from "@/lib/zod/profileSchema";

export const revalidate = 0;

const ProfilePage = async () => {
  const profile: Profile | null = await fetchUserProfile();

  return (
    <div>
      <AdminHeader>
        <div className="flex gap-2">
          <Input type="text" placeholder="Search topics" />
          <Button className="text-white">+ Add new topic</Button>
        </div>
      </AdminHeader>

      <div className="container mx-auto px-7">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 mt-5">
          <h1 className="font-bold text-2xl mb-3 sm:mb-0">
            Profile Management
          </h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="md:col-span-2">
            {profile && <ProfileForm profile={profile} />}
          </div>


          <div className="flex flex-col gap-6">
            <Account />
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
