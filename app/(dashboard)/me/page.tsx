'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Wallet,
  Heart,
  Camera,
  Settings,
  Shield,
  ChevronRight,
  ChevronLeft,
  QrCode,
  Copy,
  DollarSign
} from 'lucide-react';
import Image from 'next/image';
import { signOut } from '@/lib/auth';

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
  showBadge?: boolean;
  badgeText?: string;
  type?: string;
  action?: () => void;
}

const menuSections = [
  {
    items: [
      {
        id: 'serve',
        title: 'Serve',
        icon: <Image src="/me/serve.png" alt="serve" width={30} height={30} />,
        type: 'group'
      },
      {
        id: 'supply',
        title: 'My supply',
        icon: <Image src="/me/star.png" alt="star" width={30} height={30} />
      },
      {
        id: 'collect',
        title: 'collect',
        icon: (
          <Image src="/me/collect.png" alt="collect" width={30} height={30} />
        )
      },
      {
        id: 'video',
        title: 'Video number',
        icon: (
          <Image src="/me/video-call.png" alt="video" width={30} height={30} />
        )
      },
      {
        id: 'privateKey',
        title: '私钥地址',
        icon: (
          <Image src="/me/address.png" alt="address" width={30} height={30} />
        ),
        type: 'group'
      },
      {
        id: 'settings',
        title: 'Set up',
        icon: (
          <Image src="/me/setting.png" alt="setting" width={30} height={30} />
        )
      }
    ]
  }
];

export default function MePage() {
  return (
    <div className="flex flex-col h-full ">
      {/* 顶部导航栏 */}
      <div className="flex justify-evenly items-center p-4 bg-white">
        <Button variant="outline" className="px-4 py-1 text-sm">
          <Image
            src="/top/bnb.png"
            alt="usa"
            className="object-cover mr-1"
            width={19}
            height={19}
          />
          BNB Chain
        </Button>
        <Button variant="outline" className="px-4 py-1 text-sm">
          Connect wallet
        </Button>
        <Button variant="outline" className="flex items-center space-x-1">
          <div className="inline-block align-middle mr-1 w-4 h-4 rounded-full overflow-hidden">
            <Image
              src="/top/usa.png"
              alt="usa"
              className="w-full h-full object-cover"
              width={20}
              height={20}
            />
          </div>
          <span className="text-sm">USA</span>
        </Button>
      </div>
      {/* <div className="p-4 border-b bg-white">
        <ChevronLeft className="h-5 w-5 text-xl" />
      </div> */}
      {/* 个人信息卡片 */}
      <div className="mb-4 p-5 bg-white">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="h-16 w-16 rounded overflow-hidden">
              <img
                src="/me/me.png"
                alt="me"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold">HANJJI ハンチ</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Wallet 0x76494879
              <Copy className="h-3 w-3 inline-block ml-1" />
            </p>
          </div>
          <div className="h-8 w-8 bg-background mt-[-10]">
            <QrCode className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={`overflow-hidden`}>
            {section.items.map((item, itemIndex) => (
              <MenuListItem
                key={item.id}
                item={item}
                isLast={itemIndex === section.items.length - 1}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuListItem({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  return (
    <div
      className={`flex items-center relative p-4 bg-white hover:bg-muted/50 cursor-pointer ${item.type && 'mb-2'}`}
      onClick={item.action}
    >
      <div className="flex items-center justify-center w-10 h-10 mr-3">
        {item.icon}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-base">{item.title}</h3>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-1">
            {item.description}
          </p>
        )}
      </div>
      {/* 下边框 */}
      {!item.type && (
        <div className="border-t w-[calc(100%-4rem)] border-border absolute bottom-0 right-0"></div>
      )}
    </div>
  );
}
