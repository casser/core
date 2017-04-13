type Constructor<T> = new(...args: any[]) => T;
type MapLike<T> = {
    [s:string]:T;
}