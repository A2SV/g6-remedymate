import Header from "@/components/ManagersDashboard/Header"
import Active from "@/components/ManagersDashboard/Active"
import Data from "@/components/ManagersDashboard/Data"
import AddUser from "@/components/ManagersDashboard/AddUser"
export default function ManagerDash() {
  return (
    <div className="p-4">
      <Header/>
      <div className="mt-4">
        <Active />
      </div>
      <div className="mt-4">
        <Data />
      </div>
      <div className="mt-4">
        <AddUser />
      </div>
    </div>
  );
}

