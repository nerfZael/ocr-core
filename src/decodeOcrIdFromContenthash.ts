import { BigNumber, ethers } from "ethers";
import { arrayify, BytesLike } from "ethers/lib/utils";
import { OCR_PROTOCOL_ID } from "./constants";
import { OcrId } from "./OcrId";
import { decodeFixedBytes } from "@nerfzael/encoding";

export const decodeOcrIdFromContenthash = (
  contenthash: BytesLike,
  ocrProtocolId?: number
): OcrId | undefined => {
  ocrProtocolId = ocrProtocolId ?? OCR_PROTOCOL_ID;
  
  const contentHashBytes = arrayify(contenthash);

  const protocolId = contentHashBytes[0];

  if (protocolId !== ocrProtocolId) {
    return undefined;
  }

  const [protocolVersion, chainId, contractAddress, packageIndex, startBlock, endBlock] =
    decodeFixedBytes(contentHashBytes, [2, 8, 20, 8, 8, 8], 1);

  return {
    protocolVersion: BigNumber.from(protocolVersion).toNumber(),
    chainId: BigNumber.from(chainId).toNumber(),
    contractAddress: ethers.utils.hexlify(contractAddress),
    packageIndex: BigNumber.from(packageIndex).toNumber(),
    startBlock: BigNumber.from(startBlock).toNumber(),
    endBlock: BigNumber.from(endBlock).toNumber(),
  };
};