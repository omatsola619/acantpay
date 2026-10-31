import BalanceSummary from "@/components/home/BalanceSummary";
import HomeHeader from "@/components/home/HomeHeader";
import RecentTransactions from "@/components/home/RecentTransactions";
import VerifyIdCard from "@/components/home/VerifyIdCard";
import { recentTransactions, user } from "@/lib/mock-data";

export default function HomeScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Greeting stays pinned; everything below it scrolls */}
      <div className="shrink-0 px-4 pt-[21px]">
        <HomeHeader name={user.firstName} unread={user.unreadNotifications} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 pt-6 [scrollbar-width:none]">
        <div className="flex w-full shrink-0 flex-col items-center gap-6">
          <BalanceSummary total={user.totalValue} />
        </div>
        {!user.idVerified && <VerifyIdCard />}
        <RecentTransactions transactions={recentTransactions} />
      </div>
    </div>
  );
}
