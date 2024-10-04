function cekKecocokan() {
    const namaCowok = document.getElementById("namaCowok").value.trim();
    const namaCewek = document.getElementById("namaCewek").value.trim();

    if (namaCowok === "" || namaCewek === "") {
        alert("Masukkan kedua nama ya, biar bisa dicek kecocokannya!");
        return;
    }

    // Kalkulasi kecocokan secara acak
    const kecocokan = Math.floor(Math.random() * 101);
    localStorage.setItem("kecocokan", kecocokan);

    // Daftar alasan berdasarkan range kecocokan
    const alasanList = {
        rendah: [
            "Yah, mungkin ini nggak jodoh deh. Tapi jangan sedih, dunia nggak selebar daun kelor kok! 😅",
            "Sepertinya kalian lebih cocok jadi rival dalam kompetisi main game. 🎮",
            "Mungkin cocoknya jadi teman aja, biar nggak pusing! 😂",
            "Sepertinya hubungan kalian kayak listrik PLN, suka putus-putus nih. ⚡️",
            "Ini jodoh atau lawan main? Kok cocoknya buat berantem mulu sih. 🤔",
            "Kalian cocok buat bikin drama, bukan buat kisah cinta. 🎭",
            "Mungkin nggak cocok jadi pasangan, tapi bisa jadi bahan cerita lucu. 📖",
            "Lebih cocok jadi tokoh antagonis di hidup satu sama lain nih. 😈",
            "Kalian kayak sinetron TV, semakin nggak cocok, semakin seru ditonton. 📺",
            "Bagaikan minyak dan air, nggak pernah bisa menyatu. 🧴💧",
            "Kalian cocoknya buat berkompetisi, bukan buat berpelukan. 🥊",
            "Sepertinya lebih baik berteman saja, ya! 😊",
            "Kalian berdua kayak magnet yang tolak-menolak terus. 🧲",
            "Kecocokan kalian bagaikan utara dan selatan, selalu jauh. 🌎",
            "Mungkin hanya cocok dalam mimpi saja! 😴",
            "Bisa jadi, tapi kalian seperti dua sisi koin yang tak pernah bertemu. 🪙",
            "Sepertinya ini hubungan yang rawan 'putus sambung' deh. 🔄",
            "Mungkin lebih baik jadi sahabat curhat aja! 🎤",
            "Kalian seperti dua gunung, gak akan pernah bertemu. 🏔️",
            "Mungkin kalian harus coba berteman dulu. Siapa tahu cocok? 😊",
            "Wah, sulit banget nih! Kayaknya harus mencari yang lain. 🔍",
            "Mirip dua potongan puzzle yang nggak nyambung. 🧩",
            "Kalian kayak sandal jepit yang kehilangan pasangannya. 🩴",
            "Saling melengkapi, tapi dengan cara yang salah. 🙃",
            "Kalian kayak kucing dan anjing, selalu ada konflik. 🐱🐶",
            "Sepertinya kurang serasi untuk saat ini. 💔",
            "Mungkin lebih baik jadi teman nonton Netflix aja. 📺",
            "Kayaknya kalian cocoknya buat saling nge-roasting aja. 🔥",
            "Ini kayak hubungan cinta-benci nih! 😂",
            "Kalian cocok buat ngelawak bareng, bukan untuk jadian. 🤣"
                ],
        menengahRendah: [
            "Hmm, ada potensi sih. Tapi kayaknya harus sering-sering nge-date dulu deh. 😉",
            "Cocok sih, tapi kayaknya masih butuh waktu buat saling ngerti. ⏳",
            "Bisa jadi, tapi kalian harus ngobrol lebih banyak deh biar nggak kikuk! 🗣️",
            "Kalian kayak nasi tanpa lauk, ada rasa tapi belum mantap. 🍚",
            "Lumayan, tapi kayaknya masih butuh usaha lebih banyak nih. 💪",
            "Masih ada harapan, mungkin tinggal cari topik yang seru buat ngobrol. 🎲",
            "Bisa kok, asal ada usaha yang gigih dari dua belah pihak! 🤝",
            "Sedikit lagi nih, kalian hampir cocok! Tinggal adaptasi sedikit. ⚙️",
            "Kalian seperti internet yang koneksinya suka putus-putus, perlu diperbaiki. 📶",
            "Mungkin cocok, tapi butuh saling terbuka lebih banyak nih. 🗝️",
            "Kayak hujan rintik-rintik, kalau lama-lama bisa banjir juga. 🌧️",
            "Butuh waktu dan kesabaran, tapi pasti bisa klop! 🕰️",
            "Lumayan, tapi kayaknya butuh lebih banyak petualangan bareng. 🚀",
            "Kalian seperti lagu yang hampir hafal, tinggal diulang beberapa kali lagi. 🎶",
            "Ada potensi! Asal nggak buru-buru aja. ⏳",
            "Kalian kayak puzzle yang hampir cocok, tinggal diutak-atik lagi. 🧩",
            "Butuh komitmen ekstra, tapi ini mungkin layak dicoba. ❤️",
            "Masih ada jarak, tapi bisa diatasi kalau mau usaha. 🌉",
            "Kayak sepatu yang baru pertama dipakai, perlu adaptasi dulu. 👞",
            "Bisa cocok kalau kalian mau lebih banyak waktu berdua. ⏰",
            "Mirip teh tawar yang perlu tambahan gula. 🍵",
            "Ada potensi jadi seru, tapi mungkin awalnya canggung. 😅",
            "Kayak membaca buku tebal, perlu kesabaran tapi akhirnya seru. 📖",
            "Bisa cocok banget kalau mau sedikit mengalah. 🤏",
            "Lumayan, tapi butuh sedikit keajaiban biar lebih klop. 🪄",
            "Butuh saling terbuka, siapa tahu makin serasi. ❤️",
            "Kayak bumbu masakan, harus diracik pas biar enak. 🍲",
            "Ada rasa, tapi perlu sedikit bumbu tambahan biar mantap. 🌶️",
            "Masih belum klik, tapi bisa diperbaiki. 🔧",
            "Kayak sepeda yang butuh angin, tinggal dikasih energi positif aja. 🚴‍♂️"
                ],
        menengahAtas: [
            "Kalian kayak kucing dan sinar laser, suka tapi bingung gimana mulainya. 😺",
            "Bisa cocok banget, asal mau ngalah dikit-dikit aja. 🤏",
            "Kalian mirip kayak wifi dan router, nyambung kadang, kadang nge-lag. 📶",
            "Hmm, chemistry-nya ada sih, tinggal sering ketemu aja. 🕺💃",
            "Cocok buat bikin kenangan indah, tapi harus sabar ngadepin satu sama lain. 🌄",
            "Kalian kayak puzzle yang hampir jadi, tinggal nyari potongan terakhir. 🧩",
            "Bisa banget nih, kayak tinggal satu langkah lagi. Semangat ya! 🚶",
            "Kalian seperti ponsel lowbat, butuh recharge biar lebih positif! 🔋",
            "Chemistry kalian seperti magnet, kadang saling tarik kadang tolak. 🧲",
            "Kalian mirip banget kayak sepasang sepatu yang baru dibeli. 👟",
            "Cocok, tapi kadang masih perlu adjustment biar klop. 🔧",
            "Seperti teh dan susu, lumayan serasi tapi perlu waktu buat nge-blend. 🥛",
            "Bisa seru banget kalau lebih terbuka lagi. 💬",
            "Kalian kayak melodi dan irama, cocok tapi masih bisa lebih klop. 🎶",
            "Ada klik-nya, tapi butuh beberapa pertemuan lagi biar lebih mantap. 🔗",
            "Cocok, asal mau saling ngertiin lebih dalam. 📖",
            "Kayak kopi campur krim, awalnya aneh tapi lama-lama enak. ☕",
            "Masih perlu waktu untuk mencapai tingkat kemesraan sempurna. 🧩",
            "Kalian kayak langit dan awan, bisa bareng tapi butuh suasana. ☁️",
            "Bisa banget! Tinggal dipoles dikit biar makin kinclong. 🧼",
            "Bakal jadi kisah seru nih kalau sering jalan bareng. 🚗",
            "Butuh komunikasi lebih banyak biar chemistry-nya makin kuat. 📞",
            "Cocok kalau mau meluangkan waktu untuk saling mengenal lebih. ⏳",
            "Seperti gitar dan senar, bisa harmonis kalau disetel dengan baik. 🎸",
            "Butuh waktu dan kesabaran, tapi kalian punya potensi. 💪",
            "Tinggal satu langkah lagi buat jadi soulmate. 💞",
            "Mungkin perlu adaptasi, tapi ini bisa jadi cinta sejati. 🌹",
            "Cocok banget kalau mau usaha dan pengertian lebih. 👫",
            "Kayak nasi goreng sama telur, makin sempurna kalau bareng. 🍳",
            "Bakal jadi cerita seru, tinggal tambahin sedikit keseruan. 🎢"
                ],
        tinggi: [
            "Wah, kalian cocok banget! Bikin yang lain iri nih. 💖",
            "Kalian seperti laptop sama WiFi, kalau konek nggak mau lepas. 📶",
            "Gak heran kalau banyak yang bilang kalian couple goals. ✨",
            "Pasangan ini bikin orang senyum-senyum sendiri. 🥰",
            "Chemistry kalian kuat banget, kayak sabun dan air. 🧼",
            "Kalian berdua punya magnet yang nggak kelihatan. Bikin saling tarik-tarikan terus. 🧲",
            "Bisa jadi definisi dari ‘soulmate’, nih. 😍",
            "Kalian kayak raja dan ratu, klop banget! 👑",
            "Hubungan kalian bagaikan bintang dan langit, selalu bersinar. ✨",
            "Kalian kayak pizza dan topping favorit, nggak bisa dipisahin. 🍕",
            "Bikin yang lain iri, nih. Cocok banget buat jadi couple of the year! 🏆",
            "Kayak charger dan ponsel, saling melengkapi dan bikin hidup lebih baik. 🔌",
            "Serasi banget, sampai bikin yang lain minder. 😘",
            "Chemistry kalian kuat banget, kayak gorengan sama sambal. 🍟",
            "Kalian bagaikan es krim dan cokelat, klop banget! 🍫",
            "Bisa jadi hubungan yang langgeng, nih. 🕊️",
            "Seperti gula dan kopi, kalian melengkapi satu sama lain. ☕",
            "Kalian seperti film romantis, bikin yang lain baper. 🎥",
            "Cocok banget! Bagaikan sarung dan bantal, bikin nyaman terus. 🛌",
            "Kayak hujan dan pelangi, selalu bikin suasana ceria. 🌈",
            "Kalian seperti taman bunga, bikin sejuk dan ceria. 🌺",
            "Hubungan kalian bakal jadi kisah manis, nih! 🍯",
            "Kalian seperti sinar matahari di pagi hari, selalu menyejukkan. 🌞",
            "Kalian kayak TV dan remote, nggak bisa hidup tanpa yang lain. 📺",
            "Bakal jadi cerita cinta indah yang banyak bikin iri. 💕",
            "Seperti ponsel sama power bank, selalu nyambung terus. 🔋",
            "Kalian kayak bintang di langit malam, selalu bersinar. 🌟",
            "Chemistry kalian mirip kayak soundtrack di film, bikin suasana hidup. 🎶",
            "Pas banget nih, seperti kopi susu yang mantap. 🥤",
            "Kayak laut dan pantai, nggak bisa hidup tanpa yang lain. 🌊"
                ],
        sangatTinggi: [
            "Cocok banget! Bagaikan Romeo dan Juliet, nggak bisa dipisahkan. 🌹",
            "Kalian kayak pasangan sempurna di novel-novel romance! 📖❤️",
            "Bagaikan langit dan bumi, tak bisa dipisahkan. 🌍",
            "Ini dia pasangan paling perfect, bikin yang lain iri deh! 😘",
            "Saling melengkapi kayak gula dan teh, bikin hidup jadi manis. 🍵",
            "Kalian seperti pangeran dan putri di dongeng, cocok banget. 👸🤴",
            "Saking cocoknya, mungkin udah jodoh dari zaman dulu! 💍",
            "Definisi saling melengkapi, seperti bulan dan matahari. 🌞🌜",
            "Hubungan kalian bikin yang lain yakin bahwa cinta sejati itu ada. 💖",
            "Seperti komedi romantis, kalian cocok banget jadi pasangan utama. 🎬",
            "Kalian kayak cupcake dan icing, manis banget kalau bareng. 🧁",
            "Bikin yang lain bilang, 'kapan nikah?'. Pas banget pokoknya! 💒",
            "Kalian kayak pelangi setelah hujan, bikin hidup berwarna. 🌈",
            "Hubungan kalian seperti film Disney, penuh keajaiban! 🏰",
            "Seperti soulmate yang dipisahkan, tapi akhirnya bersatu lagi. 💏",
            "Kalian seperti siang dan malam, meskipun berbeda tapi saling melengkapi. ☀️🌑",
            "Bikin yang lain percaya sama yang namanya takdir cinta. ✨",
            "Kalian kayak soundtrack yang bikin film jadi lebih hidup. 🎶",
            "Serasi banget, bikin yang lain pengen kayak kalian. 😍",
            "Seperti pasangan legendaris, kalian bikin cerita cinta yang bikin iri. 📖",
            "Bagaikan magnet, kalian selalu menarik satu sama lain. 🧲",
            "Kalian kayak pelangi yang muncul setelah hujan, selalu dinantikan. 🌈",
            "Saling melengkapi seperti keyboard dan layar, nggak bisa dipisahkan. 💻",
            "Kalian kayak sarapan favorit di pagi hari, bikin hari jadi sempurna. 🍞",
            "Seperti bunga dan lebah, kalian tak terpisahkan. 🐝",
            "Pasangan ini bagaikan kunci dan pintu, nggak bisa terpisahkan. 🔑",
            "Bikin yang lain bilang, 'kalau kalian nggak cocok, nggak ada yang cocok lagi'. 😘",
            "Kalian seperti halaman terakhir di novel favorit, bikin terharu. 📚",
            "Hubungan kalian bak bulan madu terus menerus. 💖",
            "Seperti kunci jawaban dari semua pertanyaan, kalian saling melengkapi! 🔐"
                ]
    };

    // Pilih alasan berdasarkan rentang kecocokan
    let alasan;
    if (kecocokan <= 30) {
        alasan = alasanList.rendah[Math.floor(Math.random() * alasanList.rendah.length)];
    } else if (kecocokan <= 60) {
        alasan = alasanList.menengahRendah[Math.floor(Math.random() * alasanList.menengahRendah.length)];
    } else if (kecocokan <= 80) {
        alasan = alasanList.menengahAtas[Math.floor(Math.random() * alasanList.menengahAtas.length)];
    } else if (kecocokan <= 90) {
        alasan = alasanList.tinggi[Math.floor(Math.random() * alasanList.tinggi.length)];
    } else {
        alasan = alasanList.sangatTinggi[Math.floor(Math.random() * alasanList.sangatTinggi.length)];
    }

    // Tampilkan hasil
    document.getElementById("persentase").innerText = `Kecocokan: ${kecocokan}%`;
    document.getElementById("alasan").innerText = alasan;
    document.getElementById("hasil").classList.remove("hidden");

    // Ganti teks tombol menjadi "Coba dengan Orang Lain" dan ubah fungsi onclick
    const cekButton = document.getElementById("cekButton");
    cekButton.innerText = "Coba dengan Orang Lain";
    cekButton.onclick = resetForm;
}

function resetForm() {
    // Kosongkan input nama dan hasil
    document.getElementById("namaCowok").value = "";
    document.getElementById("namaCewek").value = "";
    document.getElementById("persentase").innerText = "";
    document.getElementById("alasan").innerText = "";
    document.getElementById("hasil").classList.add("hidden");

    // Kembalikan teks tombol menjadi "Cek Kecocokan!" dan ubah fungsi onclick kembali
    const cekButton = document.getElementById("cekButton");
    cekButton.innerText = "Cek Kecocokan!";
    cekButton.onclick = cekKecocokan;
}
