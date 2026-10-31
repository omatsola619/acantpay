import BalanceSummary from "@/components/home/BalanceSummary";
import HomeHeader from "@/components/home/HomeHeader";
import RecentTransactions from "@/components/home/RecentTransactions";
import VerifyIdCard from "@/components/home/VerifyIdCard";
import { recentTransactions, user } from "@/lib/mock-data";

export default function HomeScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 pt-[21px] [scrollbar-width:none]">
      <div className="flex w-full shrink-0 flex-col items-center gap-6">
        <HomeHeader name={user.firstName} unread={user.unreadNotifications} />
        <BalanceSummary total={user.totalValue} />
      </div>
      {!user.idVerified && <VerifyIdCard />}
      <RecentTransactions transactions={recentTransactions} />
    </div>
  );
}
