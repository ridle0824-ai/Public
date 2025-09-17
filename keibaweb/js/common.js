document.addEventListener("DOMContentLoaded", () => {
  const menuHeader = document.getElementById("menuHeader");

  if (!menuHeader) return; // メニューが無いページはスキップ

  if (localStorage.getItem("isLoggedIn") === "true") {
    // HOME は残して、ログイン・新規登録をアイコン＋ログアウトボタンに置き換え
    menuHeader.innerHTML = `
      
      <li class="menu-item">
        <a href="../pages/mypage.html" class="menu-link" id="userIcon">
          <img src="../images/account.png" alt="ユーザー" class="user-icon">
        </a>
      </li>
      <li class="menu-item">
        <button id="logoutBtn" class="menu-link">ログアウト</button>
      </li>
    `;

    // ログアウトボタンの処理
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      location.reload(); // ページ更新でログアウト状態に戻す
    });
  }
});

const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const ratio = entry.intersectionRatio;

    if (ratio >= 0.7) {
      entry.target.classList.add('active');
    } else if (ratio <= 0.3) {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: Array.from({ length: 101 }, (_, i) => i / 100) });

slides.forEach(slide => observer.observe(slide));
