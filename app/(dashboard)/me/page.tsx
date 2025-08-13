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
import { useAccount, useEnsName } from 'wagmi';
import { useToast } from '@/hooks/use-toast';

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

export default function MePage() {
  const { address, isConnected, chain } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { toast } = useToast();

  // 动态生成菜单数据
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

  // 格式化钱包地址显示
  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // 复制地址到剪贴板
  const copyAddress = async () => {
    if (address) {
      try {
        await navigator.clipboard.writeText(address);
        toast({
          title: "复制成功",
          description: "钱包地址已复制到剪贴板",
          variant: "success"
        });
      } catch (err) {
        console.error('复制失败:', err);
        toast({
          title: "复制失败",
          description: "无法复制地址，请手动复制",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <div className="flex flex-col h-full ">
      {/* 顶部导航栏 */}
      <div className="flex justify-evenly items-center p-4 bg-white">
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
            {/* 连接状态指示器 */}
            {isConnected && (
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {ensName || (isConnected ? '钱包用户' : 'HANJJI ハンチ')}
            </h2>
            <div className="text-sm text-muted-foreground mt-1 flex items-center">
              {isConnected ? (
                <>
                  <span>钱包 {formatAddress(address!)}</span>
                  <Copy 
                    className="h-3 w-3 inline-block ml-1 cursor-pointer hover:text-foreground" 
                    onClick={copyAddress}
                  />
                </>
              ) : (
                <span>未连接钱包</span>
              )}
            </div>
            {/* 显示当前网络 */}
            {isConnected && chain && (
              <div className="text-xs text-muted-foreground mt-1">
                网络: {chain.name}
              </div>
            )}
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
      className={`flex items-center relative h-[50px] px-4 bg-white hover:bg-muted/50 cursor-pointer ${item.type && 'mb-2'}`}
      onClick={item.action}
    >
      <div className="flex items-center justify-center w-8 h-8 mr-3">
        {item.icon}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm">{item.title}</h3>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
        {item.description && (
          <p className="text-xs text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
      {/* 下边框 */}
      {!item.type && (
        <div className="border-t w-[calc(100%-3.5rem)] border-border absolute bottom-0 right-0"></div>
      )}
    </div>
  );
}
