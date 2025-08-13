// 智能合约相关工具函数和ABI定义
import MerkleDistributor from '@/contract/abi/merkle_distribute.json';

export const MERKLE_DISTRIBUTOR_ABI = MerkleDistributor.abi;

/**
 * 获取Merkle分发器合约地址
 */
export function getMerkleDistributorAddress(): string {
  const address = process.env.NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS;
  if (!address) {
    console.warn('NEXT_PUBLIC_MERKLE_DISTRIBUTOR_ADDRESS 环境变量未设置');
    return '';
  }
  return address;
}

/**
 * 验证合约地址格式
 */
export function isValidContractAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}