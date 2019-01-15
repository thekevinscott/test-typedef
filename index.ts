interface IFoo {
  (): boolean;
}

export const notWorking: IFoo = () => true;

export const working: IFoo = (): boolean => true;
