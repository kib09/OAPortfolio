import { useCallback, useState } from 'react';
import { profile } from '../data/profile';
import { Toast } from './Toast';

type CopyTarget = 'email' | 'phone';

const COPY_LABEL: Record<CopyTarget, string> = {
  email: '이메일',
  phone: '전화번호',
};

/** 연락처 — 클릭 시 클립보드 복사 + 토스트 피드백 */
export function Contact() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const closeToast = useCallback(() => setToastMessage(null), []);

  const copyToClipboard = async (text: string, type: CopyTarget) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage(`${COPY_LABEL[type]}을(를) 클립보드에 복사했습니다.`);
    } catch {
      setToastMessage('복사에 실패했습니다. 직접 선택해 복사해 주세요.');
    }
  };

  const hasContact = Boolean(profile.email || profile.phone);

  return (
    <>
      <section id="contact" className="section section--contact">
        <div className="container">
          <div className="contact__box">
            <h2 className="section-title">연락처</h2>
            <p className="contact__desc">
              {hasContact
                ? '항목을 클릭하면 클립보드에 복사됩니다.'
                : 'OA 유지보수 포지션에 관심이 있으시면 아래로 연락 주세요.'}
            </p>

            {hasContact ? (
              <div className="contact__links">
                {profile.email && (
                  <button
                    type="button"
                    className="contact__copy-btn"
                    onClick={() => copyToClipboard(profile.email, 'email')}
                    aria-label={`이메일 ${profile.email} 복사`}
                  >
                    <span className="contact__copy-label">이메일</span>
                    <span className="contact__copy-value">{profile.email}</span>

                  </button>
                )}
                {profile.phone && (
                  <button
                    type="button"
                    className="contact__copy-btn"
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    aria-label={`전화번호 ${profile.phone} 복사`}
                  >
                    <span className="contact__copy-label">전화</span>
                    <span className="contact__copy-value">{profile.phone}</span>
 
                  </button>
                )}
              </div>
            ) : (
              <p className="contact__placeholder">
                <code>src/data/profile.ts</code> 파일에서{' '}
                <strong>email</strong>, <strong>phone</strong>을 입력한 뒤 빌드하세요.
              </p>
            )}

            <p className="contact__note">
              {profile.name} · {profile.role} · 포트폴리오 {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

      <Toast message={toastMessage} onClose={closeToast} />
    </>
  );
}
