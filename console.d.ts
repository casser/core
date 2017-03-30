declare interface Console{
     assert(expression:boolean,object:any);
     clear();
     count(label:string);
     debug(object:any,...args:any[]);
     dir(object:any);
     dirxml(object:any);
     error(object:any,...args:any[]);
     group(object:any,...args:any[]);
     groupCollapsed(object:any,...args:any[]);
     groupEnd();
     info(object:any,...args:any[]);
     log(object:any,...args:any[]);
     profile(label?:string);
     profileEnd();
     time(label?:string);
     timeEnd(label?:string);
     timeStamp(label?:string);
     trace(object:any);
     warn(object:any,...args:any[]);
}

declare const console:Console;