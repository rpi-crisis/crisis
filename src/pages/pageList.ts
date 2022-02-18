const Pages = (current:string) => {
  let pages: {text:string, path:string, active:boolean, external?:string}[] = [
    {
      text:"Home",
      path:"/",
      active:false,
    },
    {
      text:"About",
      path:"/about",
      active:false,
    },
    {
      text:"GitHub",
      path:"/",
      active:false,
      external:"https://github.com/rpi-crisis/crisis"
    },
  ];

  return pages.map(el => {el.active = (el.text === current); return el});
}
export default Pages;
