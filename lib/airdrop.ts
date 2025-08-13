// 空投相关工具函数和类型定义

export interface AirdropData {
  index: number;
  address: string;
  amount: string;
  proof: string[];
  amountInEther?: string;
  batchIndex?: number;
  batchRoot?: string;
}

/**
 * 获取用户空投数据
 * @param address 用户钱包地址
 * @returns 空投数据或null
 */
export async function getUserAirdropData(address: string): Promise<AirdropData | null> {
  try {
    // 规范化地址格式
    const normalizedAddress = address.toLowerCase();
    
    const response = await fetch(`/api/merkle-proof?address=${normalizedAddress}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null; // 地址不在空投列表中
      }
      throw new Error(`HTTP错误: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.error) {
      console.error('API返回错误:', result.error);
      return null;
    }
    
    return result.data;
  } catch (error) {
    console.error('获取空投数据出错:', error);
    return null;
  }
}

/**
 * 格式化代币数量显示
 * @param amount 代币数量（wei单位）
 * @returns 格式化的数量字符串
 */
export function formatTokenAmount(amount: string): string {
  try {
    const amountInEther = parseFloat(amount) / Math.pow(10, 18);
    return amountInEther.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 5
    });
  } catch (error) {
    console.error('格式化代币数量出错:', error);
    return '0';
  }
}

/**
 * 格式化钱包地址显示
 * @param address 完整地址
 * @returns 缩短的地址显示
 */
export function formatAddress(address: string): string {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

/**
 * 验证空投数据完整性
 * @param data 空投数据
 * @returns 是否有效
 */
export function isValidAirdropData(data: any): data is AirdropData {
  return (
    data &&
    typeof data.index === 'number' &&
    typeof data.address === 'string' &&
    typeof data.amount === 'string' &&
    Array.isArray(data.proof) &&
    data.proof.every((p: any) => typeof p === 'string')
  );
}

/**
 * 计算估算的gas费用
 * @returns gas估算值
 */
export function getEstimatedGasFee(): bigint {
  // 根据网络情况返回估算的gas费用
  // 这里返回一个保守的估算值
  return BigInt(100000); // 100k gas units
}