export const handleButtonColor = (name: string): string => {
  if (name === "MetaMask") {
    return "linear-gradient(to right, #FF5C00, #FFDC24)";
  } else if (name === "WalletConnect") {
    return "linear-gradient(to right, #8F00FF, #0700FF)";
  } else {
    return "linear-gradient(to right, #3773F5, #0052FF)";
  }
};

export const handleButtonImage = (name: string): string => {
  if (name === "MetaMask") {
    return "/metaMask.svg";
  } else if (name === "WalletConnect") {
    return "/walletConnect.svg";
  } else {
    return "/coinBase.svg";
  }
};
