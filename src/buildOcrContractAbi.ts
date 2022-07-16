import { ocrContractAbiV1 } from "./ocrContractAbiV1";

export const buildOcrContractAbi = (protocolVersion: number): string[] | undefined => {
  switch(protocolVersion) {
    case 1:
      return ocrContractAbiV1;
    default:
      return undefined;
  }
};