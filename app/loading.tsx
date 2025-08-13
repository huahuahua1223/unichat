'use client';

import { Card } from '@/components/ui/card';

/**
 * 全局加载组件
 * 在页面加载过程中显示加载状态
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          {/* 加载动画 */}
          <div className="mb-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center">
              <div className="animate-spin rounded-full border-4 border-muted border-t-primary h-12 w-12"></div>
            </div>
          </div>

          {/* 加载文本 */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-semibold">加载中...</h2>
            <p className="text-muted-foreground">
              正在为您准备内容，请稍候
            </p>
          </div>

          {/* 加载进度指示器 */}
          <div className="mb-4">
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* 提示信息 */}
          <div className="text-sm text-muted-foreground">
            <p>初次加载可能需要几秒钟时间</p>
          </div>
        </Card>
      </div>
    </div>
  );
}