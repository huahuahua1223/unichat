import { mockProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    message: '模拟数据已准备就绪',
    products: mockProducts
  });
}
