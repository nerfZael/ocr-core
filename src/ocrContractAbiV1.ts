export const ocrContractAbiV1 = [
  "event StartPublish(uint256 indexed packageIndex, address indexed author)",
  "event EndPublish(uint256 indexed packageIndex, uint64 partCount)",
  "event PackagePart(uint256 indexed packageIndex, uint64 partIndex, bytes data)",
  "function protocolVersion() external view returns (uint256)",
  "function startPublish(bytes memory data, bool end) external returns(uint256)",
  "function publishPart(uint256 packageIndex, bytes memory data, bool end) external",
  "function package(uint256 packageIndex) public view returns(tuple(uint256 partCount, uint256 startBlock, uint256 endBlock, address author))"
];