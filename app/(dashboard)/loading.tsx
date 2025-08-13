'use client';

/**
 * 仪表板区域加载组件
 * 在仪表板页面加载时显示，保持布局和底部导航
 */
export default function DashboardLoading() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="text-center">
        {/* 加载动画 */}
        <div className="mb-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center">
            <div className="animate-spin rounded-full border-3 border-muted border-t-primary h-8 w-8"></div>
          </div>
        </div>

        {/* 加载文本 */}
        <p className="text-sm text-muted-foreground">正在加载...</p>
      </div>
    </div>
  );
}