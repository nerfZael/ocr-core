export type OcrId = {
  protocolVersion: number,
  chainId: number,
  packageIndex: number,
  contractAddress: string;
  startBlock?: number,
  endBlock?: number
};