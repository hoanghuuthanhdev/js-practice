const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STOREGE_KEY = 'F8 player'

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const repeat = $('.btn-repeat')
const prevbtn = $('.btn-prev')
const nextbtn = $('.btn-next')
const randomSong = $('.btn-random')
const playlist = $('.playlist')
const app = {


    currentIndexSong: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config : JSON.parse(localStorage.getItem(PLAYER_STOREGE_KEY))||{},
    songs: [
        {
            name: "Đường Lên Phía Trước",
            singer: "Quang Dũng",
            path: "./music_mp3/Duong-Len-Phia-Truoc-Tien-Minh-Tien-Minh.mp3",
            image: "./img/img1.jpg"
        },
        {
            name: "Cô Gaí Mở Đường",
            singer: "Top Nữ QK7",
            path: "./music_mp3/Co-Gai-Mo-Duong-Top-Nu-Quan-Khu-Bay.mp3",
            image: "./img/img2.jpg"
        },
        {
            name: "Hành Khúc Ngày Và Đêm",
            singer: "Anh Thơ",
            path: "./music_mp3/Hanh-Khuc-Ngay-Va-Dem-Minh-Quan-Anh-Tho.mp3",
            image: "./img/img3.jpg"
        },
        {
            name: "Khát Vọng Tuổi Trẻ",
            singer: "CLB Giai Điêuk Xanh",
            path: "./music_mp3/Khat-Vong-Tuoi-Tre-CLB-Giai-Dieu-Xanh.mp3",
            image: "./img/img4.jpg"
        },
        {
            name: "Nối Vòng Tay Lớn",
            singer: "Hồ Quang Hiếu, Thúy Khanh",
            path: "./music_mp3/Noi-Vong-Tay-Lon-Thuy-Khanh-Ho-Quang-Hieu.mp3",
            image: "./img/img5.jpg"
        },
        {
            name: "Tiếng Đàn Ta Lư",
            singer: "Lan Anh",
            path: "./music_mp3/Tieng-Dan-Ta-Lu-Lan-Anh.mp3",
            image: "./img/img6.jpg"
        },
        {
            name: "Trường Sơn Đông, Trường Sơn Tây",
            singer: "Thu Hiền, Trung Đức",
            path: "./music_mp3/Truong-Son-Dong-Truong-Son-Tay-Thu-Hien-Trung-Duc.mp3",
            image: "./img/img7.jpg"
        },
        {
            name: "Vì Nhân Dân Quên Mình",
            singer: "Top Nam Ca",
            path: "./music_mp3/Vi-Nhan-Dan-Quen-Minh-Top-Ca-Nam.mp3",
            image: "./img/img8.jpg"
        },
        {
            name: "Viếng Lăng Bác",
            singer: "Thanh Hoa",
            path: "./music_mp3/Vieng-Lang-Bac-NSND-Thanh-Hoa.mp3",
            image: "./img/img9.jpg"
        },
        {
            name: "Xin Chào Việt Nam",
            singer: "Thùy Chi",
            path: "./music_mp3/Xin-Chao-Viet-Nam-Thuy-Chi.mp3",
            image: "./img/img10.jpg"
        },
    ],
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndexSong]
            }
        })
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndexSong ? 'active' : ''}" data-index=${index}>
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    setConfig: function(key,value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STOREGE_KEY,JSON.stringify(this.config))
    },
    handleEvents: function () {
        const widthcd = cd.offsetWidth
        //xử lí phóng to thu nhỏ cd
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newwidthcd = widthcd - scrollTop
            cd.style.width = newwidthcd > 0 ? newwidthcd + 'px' : 0
            cd.style.opacity = newwidthcd / widthcd
        }
        //xử lý khi click play
        playBtn.onclick = function () {
            if (app.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        //xử lí khi song đã play
        audio.onplay = function () {
            app.isPlaying = true;
            player.classList.add('playing')
            cdThumbannimate.play()
        }
        //xử lí khi song đã pause
        audio.onpause = function () {
            app.isPlaying = false
            player.classList.remove('playing')
            cdThumbannimate.pause()
        }
        //khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        //Xử lí khi tua song 
        progress.oninput = function (e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }
        //xử lí cd quay và dừng
        const cdThumbannimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,//time quay 10 second
            iterations: Infinity
        })
        cdThumbannimate.pause()
        //Xử lí next
        nextbtn.onclick = function () {
            if (app.isRandom) {
                app.playRandomSong()
            } else {
                app.nextSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
        }
        //Xử lí prev
        prevbtn.onclick = function () {
            if (app.isRandom) {
                app.playRandomSong()
            } else {
                app.preSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
        }
        //Bật tắt random
        randomSong.onclick = function () {
            app.isRandom = !app.isRandom
            app.setConfig('isRandom',app.isRandom)
            randomSong.classList.toggle('active', app.isRandom)

        }
        //Xử lí khi kết thúc bài hát
        audio.onended = function () {
            if (app.isRepeat) {
                audio.play()
            } else {
                nextbtn.click()
            }
        }
        //Xử lí repeat lặp lại một song
        repeat.onclick = function () {
            app.isRepeat = !app.isRepeat
            app.setConfig('isRepeat',app.isRepeat)
            repeat.classList.toggle('active',app.isRepeat)

        }
        //lắng nghe hành vi click vào play list
        playlist.onclick = function(e){
            const songnote = e.target.closest('.song:not(.active)')
            if(songnote|| e.target.closest('.option')){
                //xử lí khi click vào song
                if(songnote){
                    app.currentIndexSong = Number(songnote.dataset.index)
                    console.log(songnote.dataset.index)
                    app.loadCurrentSong()           
                    app.render()
                    audio.play()
                }
                //xử lí khi click vào option
                
            }
        }
    },
    loadConfig:function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function () {
        this.currentIndexSong++
        if (this.currentIndexSong >= this.songs.length) {
            this.currentIndexSong = 0
        }
        this.loadCurrentSong()
    },
    preSong: function () {
        this.currentIndexSong--
        if (this.currentIndexSong < 0) {
            this.currentIndexSong = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndexSong)
        app.currentIndexSong = newIndex
        app.loadCurrentSong()

    },
    scrollToActiveSong: function () {
        setTimeout(
            () => {
                $('.song.active').scrollIntoView({
                    behavior :'smooth',
                    block : 'center'
                })
            },100
        )

    },
    start: function () {

        //gắn cấu hình từ config vào ứng dụng
        this.loadConfig()
        //định nghĩa các thuộc tính cho object
        this.defineProperties()
        //lắng nghe / xử lý các sự kiện cho (DOM event)
        this.handleEvents()
        //tải thông tin bài hát đầu tiên  vào UI khi chạy ứng dụng
        this.loadCurrentSong()
        //render Playlist
        this.render()
        //hiển thị trạng thái đầu tiên của random và status
        randomSong.classList.toggle('active', app.isRandom)
        repeat.classList.toggle('active',app.isRepeat)
    }
}
app.start()
