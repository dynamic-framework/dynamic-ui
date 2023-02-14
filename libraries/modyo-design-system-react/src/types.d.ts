interface Navigator {
  canShare(data?: ShareData): boolean;
  share(data?: ShareData): Promise<void>;
}
