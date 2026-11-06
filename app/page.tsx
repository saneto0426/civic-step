'client';

import React, { useState } from 'react';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('screen-top');

  const switchScreen = (screenId: string) => {
    setCurrentScreen(screenId);
  };

  return (
    <main style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: 'linear-gradient(135deg, #e3edf7 0%, #d6ebd9 100%)',
      color: '#2D3748',
      margin: 0,
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#ffffff',
        boxShadow: '0 15px 35px rgba(0, 51, 102, 0.15)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '660px'
      }}>
        <header style={{
          background: 'linear-gradient(135deg, #003366 0%, #1a5b8c 100%)',
          color: 'white',
          padding: '28px 20px 22px',
          textAlign: 'center',
          position: 'relative',
          borderBottom: '5px solid #2E8B57'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.05em' }}>🌱 シビック・ステップ</h1>
          <p style={{ margin: '6px 0 0', fontSize: '0.85rem', opacity: 0.9, fontWeight: 500 }}>ワクワク見つかる！ボランティアマッチング</p>
        </header>

        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          
          {/* 1. トップ画面 */}
          {currentScreen === 'screen-top' && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  textAlign: 'center',
                  margin: '10px 0 24px 0',
                  background: '#e6f4ed',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  border: '2px dashed #a3d9bc'
                }}>
                  <h2 style={{ fontSize: '1.25rem', color: '#003366', marginBottom: '10px', fontWeight: 800 }}>ボランティアをもっと身近に！</h2>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.6, margin: 0 }}>
                    「ガクチカに何書こう…」そんなあなたへ。全3問のクイック診断で、今の自分に一番ワクワクする活動を見つけよう✨
                  </p>
                </div>
              </div>
              <div>
                <button 
                  onClick={() => switchScreen('screen-q1')}
                  style={primaryBtnStyle}
                >
                  🚀 診断をスタートする
                </button>
              </div>
            </div>
          )}

          {/* 2. 診断 Q1 */}
          {currentScreen === 'screen-q1' && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <span style={stepIndicatorStyle}>質問 1 / 3</span>
                <div style={{ marginBottom: '20px' }}>
                  <label style={qTitleStyle}>やってみたい・興味のある分野は？</label>
                  <label style={radioLabelStyle}><input type="radio" name="q1" defaultChecked style={radioStyle} /> 🧸 子どもの学習支援・お楽しみ会</label>
                  <label style={radioLabelStyle}><input type="radio" name="q1" style={radioStyle} /> 🌿 地域クリーン・エコ活動</label>
                  <label style={radioLabelStyle}><input type="radio" name="q1" style={radioStyle} /> 🌏 国際交流・多文化イベント</label>
                </div>
              </div>
              <div>
                <button onClick={() => switchScreen('screen-q2')} style={primaryBtnStyle}>次へすすむ 👉</button>
                <button onClick={() => switchScreen('screen-top')} style={secondaryBtnStyle}>もどる</button>
              </div>
            </div>
          )}

          {/* 3. 診断 Q2 */}
          {currentScreen === 'screen-q2' && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <span style={stepIndicatorStyle}>質問 2 / 3</span>
                <div style={{ marginBottom: '20px' }}>
                  <label style={qTitleStyle}>参加できるペースや頻度は？</label>
                  <label style={radioLabelStyle}><input type="radio" name="q2" defaultChecked style={radioStyle} /> ⚡ まずは1回限りの単発から</label>
                  <label style={radioLabelStyle}><input type="radio" name="q2" style={radioStyle} /> 🗓 月1〜2回で楽しく継続</label>
                </div>
              </div>
              <div>
                <button onClick={() => switchScreen('screen-q3')} style={primaryBtnStyle}>次へすすむ 👉</button>
                <button onClick={() => switchScreen('screen-q1')} style={secondaryBtnStyle}>もどる</button>
              </div>
            </div>
          )}

          {/* 4. 診断 Q3 */}
          {currentScreen === 'screen-q3' && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <span style={stepIndicatorStyle}>質問 3 / 3</span>
                <div style={{ marginBottom: '20px' }}>
                  <label style={qTitleStyle}>活動を通じて得たい一番の魅力は？</label>
                  <label style={radioLabelStyle}><input type="radio" name="q3" defaultChecked style={radioStyle} /> 📈 自己成長・ガクチカに活かす</label>
                  <label style={radioLabelStyle}><input type="radio" name="q3" style={radioStyle} /> 🤝 新しい仲間や地域との繋がり</label>
                </div>
              </div>
              <div>
                <button onClick={() => switchScreen('screen-result')} style={primaryBtnStyle}>🎯 ぴったりの活動を見る！</button>
                <button onClick={() => switchScreen('screen-q2')} style={secondaryBtnStyle}>もどる</button>
              </div>
            </div>
          )}

          {/* 5. 結果・詳細画面 */}
          {currentScreen === 'screen-result' && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ marginTop: 0, color: '#003366', fontSize: '1.1rem' }}>🔥 あなたにおすすめの活動</h3>
                <div style={{ overflowY: 'auto', maxHeight: '360px', paddingRight: '2px' }}>
                  
                  <div style={resultCardStyle}>
                    <span style={matchBadgeStyle}>★ マッチ度 95%</span>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', color: '#003366' }}>渋谷区こども食堂 学習サポート</h3>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={tagStyle}>#単発OK</span>
                      <span style={tagStyle}>#土日午前</span>
                      <span style={tagStyle}>#ガクチカ直結</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', margin: '0 0 8px 0', color: '#4a5568', lineHeight: 1.5 }}>小学生の宿題を手伝ったり、一緒にボードゲームで遊ぶアットホームな活動です。</p>
                    <div style={reviewBoxStyle}>
                      <strong>先輩のリアルな声：</strong>「面接で『多様な人と協働した経験』として熱く語れました！子どもたちの笑顔が最高です（経済学部3年）」
                    </div>
                  </div>

                  <div style={resultCardStyle}>
                    <span style={matchBadgeStyle}>★ マッチ度 88%</span>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', color: '#003366' }}>青山エリア クリーンアップ作戦</h3>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={tagStyle}>#1回2時間</span>
                      <span style={tagStyle}>#友達と参加OK</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', margin: '0 0 8px 0', color: '#4a5568', lineHeight: 1.5 }}>キャンパス周辺をキレイにしながら、地域の方々と楽しくおしゃべりできる人気企画。</p>
                  </div>

                </div>
              </div>

              <div style={{ marginTop: '10px' }}>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert('AOYAMA-portal（外部サービス）へシームレスに遷移します！'); }} 
                  style={{ ...primaryBtnStyle, display: 'block', textAlign: 'center', textDecoration: 'none' }}
                >
                  👉 詳細・申し込み（AOYAMA-portalへ）
                </a>
                <button onClick={() => switchScreen('screen-top')} style={secondaryBtnStyle}>最初からやり直す</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

// 共通スタイルの定義
const primaryBtnStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #2E8B57 0%, #3cb371 100%)',
  color: 'white',
  border: 'none',
  padding: '16px',
  borderRadius: '14px',
  fontSize: '1rem',
  fontWeight: 700,
  cursor: 'pointer',
  width: '100%',
  boxShadow: '0 6px 20px rgba(46, 139, 87, 0.3)'
};

const secondaryBtnStyle: React.CSSProperties = {
  background: '#edf2f7',
  color: '#4a5568',
  border: 'none',
  padding: '14px',
  borderRadius: '14px',
  fontSize: '0.95rem',
  fontWeight: 700,
  cursor: 'pointer',
  width: '100%',
  marginTop: '10px'
};

const stepIndicatorStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 700,
  color: '#2E8B57',
  background: '#e6f4ed',
  padding: '4px 10px',
  borderRadius: '12px',
  display: 'inline-block',
  marginBottom: '12px'
};

const qTitleStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 700,
  marginBottom: '14px',
  fontSize: '1.05rem',
  color: '#003366',
  lineHeight: 1.4
};

const radioLabelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  background: '#f8fafc',
  padding: '14px 16px',
  borderRadius: '12px',
  marginBottom: '10px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: 600,
  border: '2px solid #e2e8f0'
};

const radioStyle: React.CSSProperties = {
  accentColor: '#2E8B57',
  marginRight: '12px',
  transform: 'scale(1.3)'
};

const resultCardStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
  borderRadius: '14px',
  padding: '16px',
  marginBottom: '16px',
  position: 'relative',
  overflow: 'hidden'
};

const matchBadgeStyle: React.CSSProperties = {
  display: 'inline-block',
  background: '#e6f4ed',
  color: '#2E8B57',
  fontSize: '0.75rem',
  padding: '4px 10px',
  borderRadius: '20px',
  fontWeight: 800,
  marginBottom: '8px'
};

const tagStyle: React.CSSProperties = {
  background: '#edf2f7',
  fontSize: '0.72rem',
  padding: '4px 8px',
  borderRadius: '6px',
  color: '#4a5568',
  fontWeight: 700
};

const reviewBoxStyle: React.CSSProperties = {
  background: '#f8fafc',
  borderRadius: '10px',
  padding: '10px 14px',
  fontSize: '0.82rem',
  color: '#4a5568',
  marginTop: '10px',
  borderLeft: '3px solid #003366',
  lineHeight: 1.5
};