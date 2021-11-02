export const useCnzz = (id: string): void => {
  console.log('useCnzz');

  const cnzzScript = document.createElement('script')
  cnzzScript.type = 'text/javascript'
  cnzzScript.src = `https://s9.cnzz.com/z_stat.php?id=${id}&web_id=${id}`
  cnzzScript.async = true
  document.head.appendChild(cnzzScript)
}