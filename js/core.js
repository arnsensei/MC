window.onload = function () {

    // CẤU HÌNH CHUNG v0.1

    // Tiêu đề trang web
    let title = 'Minechill';

    // Địa chỉ IP của server
    var serverIp = 'minechill.fun';
    var serverIpPort = 25165;

    // Ảnh banner đầu trang (dạng URL)
    var bannerTop = 'https://i.imgur.com/k0MtSCb.png';

    //--------------- Bộ sưu tập trang chủ ---------------
    // Dòng chữ và ảnh đầu tiên
    var text_Gfirst = 'Vật phẩm đặc biệt';
    var image_Gfirst = 'https://i.imgur.com/OkfQb7q.png';
    // Dòng chữ và ảnh thứ hai
    var text_Gsecond = 'Nền kinh tế';
    var image_Gsecond = 'https://i.imgur.com/XU4KHgV.png';
    // Dòng chữ và ảnh thứ ba
    var text_Gtrird = 'Cộng đồng tuyệt vời';
    var image_Gtrird = 'https://i.imgur.com/7JP74WT.png';
    //----------------------------------------------------

    // Loại server (FullPVP, MiniGame, Sinh tồn, v.v.)
    var typeServer = 'SMP';

    //--------------- Bình luận của người chơi ---------------
    // Tên và bình luận của người chơi đầu tiên
    var firstPlayerName = 'ArnSenpaii';
    var firstPlayerComment = "Server siêu đỉnh, chơi vui và admin luôn hỗ trợ cực nhiệt tình!";
    // Tên và bình luận của người chơi thứ hai
    var secondPlayerName = 'Tester';
    var secondPlayerComment = "Vui nè, dễ thương nè, ngầu nữa. Bạn bè tui chơi hết ở đây, lập clan thôi!";
    // Tên và bình luận của người chơi thứ ba
    var trirdPlayerName = 'Notch';
    var trirdtPlayerComment = "Tui sẽ đánh bại tất cả, chờ đó!";
    //--------------------------------------------------------

    // Liên kết mạng xã hội / ảnh banner mạng xã hội
    var urlFacebook = "https://github.com/Tiagox42";
    var urlTwiiter = "https://github.com/Tiagox42";
    var urlInstagram = "https://www.instagram.com/tdantas42/";
    var urlYoutube = "https://www.youtube.com/user/Tg42x/videos";
    var discordInvite = "https://github.com/Tiagox42";
    var bannerSocialImage = "https://i.imgur.com/oSbKvAT.png";


    //------------------ KHÔNG CHỈNH SỬA DƯỚI ĐÂY ------------------

    try {

        document.getElementById('serverIpText').innerHTML = serverIp;
        document.getElementById('title').innerHTML = title;
        document.getElementById('bannerTop').style.backgroundImage = "url(" + bannerTop + ")";
        document.getElementById('image_Gfirst').style.backgroundImage = "url(" + image_Gfirst + ")";
        document.getElementById('text_Gfirst').innerHTML = text_Gfirst;
        document.getElementById('image_Gsecond').style.backgroundImage = "url(" + image_Gsecond + ")";
        document.getElementById('text_Gsecond').innerHTML = text_Gsecond;
        document.getElementById('image_Gtrird').style.backgroundImage = "url(" + image_Gtrird + ")";
        document.getElementById('text_Gtrird').innerHTML = text_Gtrird;
        document.getElementById('typeServer').innerHTML = typeServer;
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
        document.getElementById('trirdPlayerName').innerHTML = trirdPlayerName;
        document.getElementById('firstPlayerImage').src = "https://cravatar.eu/helmavatar/" + firstPlayerName + "/190.png";
        document.getElementById('secondPlayerImage').src = "https://cravatar.eu/helmavatar/" + secondPlayerName + "/190.png";
        document.getElementById('trirdPlayerImage').src = "https://cravatar.eu/helmavatar/" + trirdPlayerName + "/190.png";
        document.getElementById('firstPlayerComment').innerHTML = firstPlayerComment;
        document.getElementById('secondPlayerComment').innerHTML = secondPlayerComment;
        document.getElementById('trirdtPlayerComment').innerHTML = trirdtPlayerComment;
        document.getElementById('urlFacebook').href = urlFacebook;
        document.getElementById('urlTwiiter').href = urlTwiiter;
        document.getElementById('urlInstagram').href = urlInstagram;
        document.getElementById('urlYoutube').href = urlYoutube;
        document.getElementById('discordInvite').href = discordInvite;
        document.getElementById('bannerSocialImage').style.backgroundImage = "url(" + bannerSocialImage + ")";

    } catch (e) {

    }

    // Kiểm tra trạng thái máy chủ Minecraft
    MinecraftAPI.getServerStatus(serverIp, {
        port: serverIpPort // không bắt buộc, chỉ cần nếu sử dụng port custom
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Lỗi khi tải trạng thái máy chủ';
        }

        document.getElementById('serverStatus').innerHTML = status.online ? 'Đang hoạt động' : 'Ngoại tuyến';
        document.getElementById('playersOn').innerHTML = status.players.now;
        document.getElementById('playersMax').innerHTML = status.players.max;
    });

    // Đổi màu chữ theo trạng thái máy chủ
    setTimeout(() => {
        var status = document.getElementById('serverStatus');
        if (status.textContent == 'Đang hoạt động') {
            status.style.color = 'green'
        } else {
            status.style.color = 'red'
        }
    }, 2000);

}

// Hàm sao chép IP vào clipboard
function copyIp() {
    let ip = document.getElementById('serverIpText').innerHTML;
    navigator.clipboard.writeText(ip);
}