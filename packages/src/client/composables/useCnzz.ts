export const useCnzz = (id: string): void => {
  console.log('useCnzz');

  const cnzzScript = document.createElement('script')
  cnzzScript.type = 'text/javascript'
  cnzzScript.src = `https://s9.cnzz.com/z_stat.php?id=1280520518&web_id=1280520518`
  cnzzScript.async = true
  document.head.appendChild(cnzzScript)
}