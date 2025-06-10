import { cn } from '@/lib/utils';
import { CheckCircle, Info, TriangleAlert } from 'lucide-react';

// 定义 Callout 组件接受的 props 类型
interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'danger';
  children: React.ReactNode;
}

// 定义不同类型的 Callout 对应的图标和样式
const calloutConfig = {
  info: {
    icon: Info,
    className:
      'border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  warning: {
    icon: TriangleAlert,
    className:
      'border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
  },
  danger: {
    icon: TriangleAlert,
    className: 'border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300',
  },
  success: {
    icon: CheckCircle,
    className:
      'border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300',
  },
};

/**
 * Callout 组件，用于在 MDX 中显示美化的提示框。
 * @param {CalloutProps} props
 */
export function Callout({ children, type = 'info' }: CalloutProps) {
  const config = calloutConfig[type] || calloutConfig.info;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'my-6 flex items-start gap-4 rounded-lg border p-4',
        config.className,
      )}
    >
      <Icon className='mt-1 h-5 w-5 flex-shrink-0' />
      <div className='prose-p:my-0 prose-ul:my-0 prose-li:my-0'>{children}</div>
    </div>
  );
}
