import './globals.css';

export const metadata = {
  title: 'XUZIQING｜游戏营销 · 品牌营销 · 内容策划',
  description: 'XUZIQING 的个人职业作品集，聚焦游戏营销、品牌营销与内容策划。',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'XUZIQING｜个人职业作品集',
    description: '游戏营销 · 品牌营销 · 内容策划',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'XUZIQING 个人职业作品集' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XUZIQING｜个人职业作品集',
    description: '游戏营销 · 品牌营销 · 内容策划',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
