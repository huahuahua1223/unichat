import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  bgColor: string;
}

function ProjectCard({ icon, title, href, bgColor }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className={`rounded-xl p-4 mb-4 border ${bgColor}`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
            {icon}
          </div>
          <div className="text-lg font-medium">{title}</div>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-4 bg-white p-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/shop/logo.png" alt="Logo" width={40} height={40} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* <Button variant="outline" className="px-4 py-1 text-sm">
            <Image
              src="/top/bnb.png"
              alt="usa"
              className="object-cover mr-1"
              width={19}
              height={19}
            />
            BNB Chain
          </Button> */}
          <appkit-button />
          <Image src="/shop/web.png" alt="Logo" width={30} height={30} />
        </div>
      </div>
      <div className="p-4">
        <div className="relative mb-6 bg-white">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none ">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:ring-0"
          />
        </div>
        <ProjectCard
          icon={
            <Image src="/shop/upload.png" alt="Logo" width={40} height={40} />
          }
          title="Upload/manage projects"
          href="/projects"
          bgColor="bg-green-100"
        />

        <ProjectCard
          icon={
            <Image src="/shop/unishop.png" alt="Logo" width={40} height={40} />
          }
          title="UNISHOP.Ai"
          href="/shop"
          bgColor="bg-blue-100"
        />

        <ProjectCard
          icon={
            <Image src="/shop/airdrop.png" alt="Logo" width={40} height={40} />
          }
          title="Airdrop"
          href="/airdrop"
          bgColor="bg-purple-100"
        />

        <ProjectCard
          icon={
            <Image src="/shop/promo.png" alt="Logo" width={40} height={40} />
          }
          title="Promotional income/view orders"
          href="/income"
          bgColor="bg-yellow-100"
        />
      </div>
    </div>
  );
}
