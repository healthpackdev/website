import Image from 'next/image';

const Img = ({ src, alt }) => {
  if (src.startsWith('https://') || src.startsWith('http://')) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={src}></img>;
  } else if (src.startsWith('/')) {
    const urlWithSize = decodeURIComponent(src).split('|');

    const size = urlWithSize[1];

    if (!size) throw new Error('Size is incorrect:', src);

    const w = size.split('x')[0];
    const h = size.split('x')[1];
    return <Image src={urlWithSize[0]} alt={alt} width={w} height={h} />;
  } else {
    throw new Error("url doesn't correct");
  }
};

export default Img;
