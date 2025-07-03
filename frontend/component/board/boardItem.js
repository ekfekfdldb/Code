import { padTo2Digits, getServerUrl } from '../../utils/function.js';

const BoardItem = (
    postId,
    date,
    postTitle,
    hits,
    imgUrl,
    writer,
    commentCount,
    like,
) => {
    // 파라미터 값이 없으면 리턴
    if (
        !date ||
        !postTitle ||
        hits === undefined ||
        like === undefined ||
        commentCount === undefined ||
        !writer
    ) {
        return;
    }

    // 날짜 포맷 변경 YYYY-MM-DD hh:mm:ss
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const formattedDate = `${year}-${padTo2Digits(month)}-${padTo2Digits(day)} ${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;

    const DEFAULT_PROFILE_IMAGE = '../public/image/profile/default.jpg';
    const profileImagePath = imgUrl === null ? DEFAULT_PROFILE_IMAGE : `${getServerUrl()}${imgUrl}`;
    // const API_HOST = getServerUrl();
    return `
<a href="/html/board.html?id=${postId}" class="boardItem-link">
  <div class="boardItem">
    <div class="boardItem-content">
      <h2 class="boardItem-title">${postTitle}</h2>
      <div class="boardItem-meta">
        <div class="boardItem-stats">
          <span class="stat stat-like">❤️ ${like}</span>
          <span class="stat stat-comment">💬 ${commentCount}</span>
        <span class="stat stat-views">📖 ${hits}</span>

        </div>
        <span class="boardItem-date">${formattedDate}</span>
      </div>
    </div>
    <div class="boardItem-writer">
      <img src="${profileImagePath}" alt="프로필 이미지" class="writer-img" />
      <span class="writer-name">${writer}</span>
    </div>
  </div>
</a>
`;
};

export default BoardItem;