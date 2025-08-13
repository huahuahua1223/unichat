'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';

/**
 * 404 页面组件
 * 当用户访问不存在的页面时显示
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          {/* 404 图标 */}
          <div className="mb-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>

          {/* 标题和描述 */}
          <div className="mb-8">
            <h1 className="mb-2 text-6xl font-bold text-muted-foreground">404</h1>
            <h2 className="mb-3 text-xl font-semibold">页面未找到</h2>
            <p className="text-muted-foreground">
              抱歉，您访问的页面不存在或已被移动。
            </p>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <Button className="w-full">
                <Home className="mr-2 h-4 w-4" />
                返回首页
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回上一页
            </Button>
          </div>

          {/* 帮助信息 */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>如果您认为这是一个错误，请联系我们的支持团队。</p>
          </div>
        </Card>
      </div>
    </div>
  );
}