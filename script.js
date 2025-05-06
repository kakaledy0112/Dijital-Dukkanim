// --- ÜRÜN VERİLERİ (Kategorilere göre ayrılmış ve detaylı) ---
const products = [
    // Anasayfa Öne Çıkanlar / Bileklikler
    { id: 'urun-1', category: 'bileklik-koleksiyonu', name: 'Kelebek Model Altın Kaplama Bileklik', price: 199.90, imageUrl: 'image/bileklik1.jpg', description: 'Zarif kelebek figürlü, altın kaplama şık bileklik. Her anınıza ışıltı katar.', isFeatured: true },
    { id: 'urun-2', category: 'bileklik-koleksiyonu', name: 'Siyah Zarif Taşlı Şık Bileklik', price: 195.00, imageUrl: 'image/bileklik3.jpg', description: 'Özel günler ve günlük kullanım için uygun, siyah ve zarif taş detaylı bileklik.', isFeatured: true },
    { id: 'urun-3', category: 'bileklik-koleksiyonu', name: 'Kalp Ve Zamanın Birleştiği Eşsiz Bileklik', price: 199.99, imageUrl: 'image/bileklik4.jpg', description: 'Kalp ve saat figürlü, eşsiz tasarıma sahip metal bileklik.', isFeatured: true },

    // Anasayfa Öne Çıkanlar / Saatler
    { id: 'urun-4', category: 'saat-koleksiyonu', name: 'Pembe Renk Yaz Saati', price: 350.00, imageUrl: 'image/saat1.jpg', description: 'Canlı pembe rengiyle yaz aylarının enerjisini yansıtan modern kol saati.', isFeatured: true },
    { id: 'urun-5', category: 'saat-koleksiyonu', name: 'Asaletin Siyahı', price: 220.00, imageUrl: 'image/saat2.jpg', description: 'Minimalist ve asil siyah tasarımlı, her tarza uyumlu kol saati.', isFeatured: true },
    { id: 'urun-6', category: 'saat-koleksiyonu', name: 'Özel Günleriniz İçin Klasik Deri Saat', price: 280.00, imageUrl: 'image/saat4.jpg', description: 'Kahverengi deri kordonlu, klasik ve şık kol saati. Özel günleriniz için ideal.', isFeatured: true },

     // Anasayfa Öne Çıkanlar / Yüzükler
    { id: 'urun-7', category: 'yuzuk-koleksiyonu', name: 'Eşsiz Taş İşlemeli Yüzük', price: 220.00, imageUrl: 'image/yüzük1.jpg', description: 'El işçiliği taş detaylarıyla bezenmiş, dikkat çekici ve eşsiz tasarım yüzük.', isFeatured: true },
    { id: 'urun-8', category: 'yuzuk-koleksiyonu', name: 'Güzellik Tesadüf Değildir!', price: 195.00, imageUrl: 'image/yüzük2.jpg', description: 'Minimalist ama etkileyici, ince detaylara sahip metal yüzük.', isFeatured: true },
    { id: 'urun-9', category: 'yuzuk-koleksiyonu', name: 'Altın Renk Kaplama Şık Yüzük', price: 175.00, imageUrl: 'image/yüzük3.jpg', description: 'Altın renk kaplama, zarif ve sade günlük kullanım yüzüğü.', isFeatured: true },

     // Anasayfa Öne Çıkanlar / Kolyeler
    { id: 'urun-10', category: 'kolye-koleksiyonu', name: 'Kuş Figürlü Altın Renk Kolye', price: 180.00, imageUrl: 'image/kolye1.jpg', description: 'Özgürlüğü simgeleyen kuş figürlü, altın renk zincir kolye.', isFeatured: true },
    { id: 'urun-11', category: 'kolye-koleksiyonu', name: 'Yonca Figürlü Şık Kolye İle Şans Seninle', price: 199.00, imageUrl: 'image/kolye2.jpg', description: 'Şans getirdiğine inanılan yonca figürlü, zarif ve ince kolye.', isFeatured: true },
    { id: 'urun-12', category: 'kolye-koleksiyonu', name: 'Senin Kolyen Senin Tarzın', price: 200.00, imageUrl: 'image/kolye3.jpg', description: 'Kendi stilinizi yansıtacak, modern tasarımlı metal kolye.', isFeatured: true },

    // Diğer Kategoriler İçin Örnek Ürünler (Bu kısmı dilediğiniz gibi genişletebilirsiniz)
    { id: 'cok-satanlar-1', category: 'cok-satanlar', name: 'Çok Satan Bileklik', price: 150.00, imageUrl: 'https://via.placeholder.com/180x220?text=Cok+Satan+1', description: 'Müşterilerimizin en çok tercih ettiği bileklik modeli.', isFeatured: false },
    { id: 'butik-1', category: 'butik', name: 'Trend Elbise', price: 450.00, imageUrl: 'https://via.placeholder.com/180x220?text=Butik+1', description: 'Sezonun en trend elbisesi, kaçırma!', isFeatured: false },
    { id: 'pijama-1', category: 'pijama-takimlari', name: 'Rahat Pijama Takımı', price: 280.00, imageUrl: 'https://via.placeholder.com/180x220?text=Pijama+1', description: 'Evde rahatlık arayanlar için pamuklu pijama takımı.', isFeatured: false },
    { id: 'corap-1', category: 'coraplar', name: 'Desenli Çorap', price: 30.00, imageUrl: 'https://via.placeholder.com/180x220?text=Corap+1', description: 'Farklı desenlere sahip eğlenceli çoraplar.', isFeatured: false },
    { id: 'esarp-1', category: 'esarp-sallar', name: 'İpek Görünümlü Eşarp', price: 120.00, imageUrl: 'https://via.placeholder.com/180x220?text=Esarp+1', description: 'Özel günleriniz için ipek dokulu şık eşarp.', isFeatured: false },
    { id: 'bujiteri-1', category: 'bujiteri', name: 'Kristal Taşlı Broş', price: 90.00, imageUrl: 'https://via.placeholder.com/180x220?text=Bujiteri+1', description: 'Elbiselerinize ışıltı katacak kristal taşlı broş.', isFeatured: false },
    { id: 'kupe-1', category: 'kupe-koleksiyonu', name: 'Halka Küpe Seti', price: 60.00, imageUrl: 'https://via.placeholder.com/180x220?text=Kupe+1', description: 'Farklı boyutlarda halka küpe seti.', isFeatured: false },
    { id: 'saat-koleksiyonu-1', category: 'saat-koleksiyonu', name: 'Minimal Metal Saat', price: 210.00, imageUrl: 'https://via.placeholder.com/180x220?text=Saat+Yeni', description: 'Sade ve modern metal kordonlu saat.', isFeatured: false },
    { id: 'yuzuk-koleksiyonu-1', category: 'yuzuk-koleksiyonu', name: 'Geometrik Tasarım Yüzük', price: 160.00, imageUrl: 'https://via.placeholder.com/180x220?text=Yuzuk+Yeni', description: 'Geometrik şekillere sahip modern tasarım yüzük.', isFeatured: false },
     { id: 'kolye-koleksiyonu-1', category: 'kolye-koleksiyonu', name: 'İnci Detaylı Kolye', price: 250.00, imageUrl: 'https://via.placeholder.com/180x220?text=Kolye+Yeni', description: 'Zarif inci detaylarıyla süslenmiş ince zincir kolye.', isFeatured: false },
      { id: 'bileklik-koleksiyonu-1', category: 'bileklik-koleksiyonu', name: 'Zincir Detaylı Bileklik', price: 185.00, imageUrl: 'https://via.placeholder.com/180x220?text=Bileklik+Yeni', description: 'Farklı zincirlerin birleşimiyle modern bileklik.', isFeatured: false },
];

// Ürünleri ID'ye göre kolayca bulmak için bir harita oluştur (opsiyonel ama faydalı)
// const productsMap = products.reduce((map, product) => {
//      map[product.id] = product;
//      return map;
// }, {});
// const findProductById = (id) => productsMap[id]; // Bu fonksiyonu kullanabiliriz


document.addEventListener('DOMContentLoaded', () => {

    console.log('Script.js yüklendi ve DOM hazır.'); // Hata ayıklama için

    // --- Mevcut Elementler ---
    const toggleCategoriesBtn = document.getElementById('toggle-categories-btn');
    const categorySidebar = document.getElementById('category-sidebar');
    // const mainContentContainer = document.getElementById('main-content-container'); // Artık direkt alanları gizleyip göstereceğiz
    const initialContent = document.getElementById('initial-content'); // Anasayfa/Öne Çıkanlar içeriği
    const categoryProductsArea = document.getElementById('category-products'); // Kategori ürünleri alanı
    const categoryProductList = categoryProductsArea ? categoryProductsArea.querySelector('.product-list') : null; // Kategori ürünlerinin yükleneceği liste (içi boşaltılıp doldurulacak)
    const initialProductList = initialContent ? initialContent.querySelector('.product-list') : null; // Anasayfa öne çıkanlar listesi

    // Modal Elementleri
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    // Modal kapatma butonları
    const loginCloseButton = loginModal ? loginModal.querySelector('.close-button') : null;
    const signupCloseButton = signupModal ? signupModal.querySelector('.close-button') : null;

    // Form Elementleri
    const showSignupLink = document.getElementById('showSignup'); // Giriş modalındaki "Kayıt Ol" linki
    const showLoginLink = document.getElementById('showLogin'); // Kayıt modalındaki "Giriş Yap" linki
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const gmailLoginButtons = document.querySelectorAll('.gmail-login-button');
    const loginMessageArea = document.getElementById('login-message');
    const signupMessageArea = document.getElementById('signup-message');

    // Alt Navigasyon Elementleri
    const bottomNavButtons = document.querySelectorAll('.bottom-navbar .nav-button'); // Tüm alt navigasyon butonları
    // Account butonu özel olarak ele alınacak, data-target-page kullanmayacak modal açmak için
    const accountButton = document.querySelector('.bottom-navbar a[href="#account"]'); // Orijinal href="#account" seçiciyi kullanıyoruz


    // --- YENİ EKLENEN ELEMENTLER ---
    const cartPage = document.getElementById('cart-page'); // Sepet sayfası alanı
    const cartItemsList = cartPage ? cartPage.querySelector('.cart-items-list') : null; // Sepet ürünlerinin listeleneceği alan
    const cartTotalSpan = document.getElementById('cart-total'); // Sepet toplam fiyat alanı
    const clearCartButton = document.getElementById('clear-cart-button'); // Sepeti temizle butonu

    const favoritesPage = document.getElementById('favorites-page'); // Favoriler sayfası alanı
    const favoriteItemsList = favoritesPage ? favoritesPage.querySelector('.favorite-items-list') : null; // Favori ürünlerinin listeleneceği alan

    const toastMessageElement = document.getElementById('toastMessage'); // Mesaj kutucuğu


    // --- LOCAL STORAGE YARDIMCI FONKSİYONLARI ---
    const getCartItems = () => {
        try {
            const cartItemsJson = localStorage.getItem('cartItems');
            // Sepet öğeleri { id: '...', quantity: N } şeklinde saklanacak
            const items = cartItemsJson ? JSON.parse(cartItemsJson) : [];
            return Array.isArray(items) ? items : []; // Dönen değerin array olduğundan emin ol
        } catch (e) {
            console.error('Error reading cart items from localStorage:', e);
            return [];
        }
    };

    const saveCartItems = (cartItems) => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (e) {
            console.error('Error saving cart items to localStorage:', e);
        }
    };

    const getFavoriteItems = () => {
        try {
            // Favoriler sadece ürün ID'lerinin array'i olarak saklanacak
            const favoriteItemsJson = localStorage.getItem('favoriteItems');
            const favoriteItemIds = favoriteItemsJson ? JSON.parse(favoriteItemsJson) : [];
            return Array.isArray(favoriteItemIds) ? favoriteItemIds : []; // Dönen değerin array olduğundan emin ol
        } catch (e) {
            console.error('Error reading favorite items from localStorage:', e);
            return [];
        }
    };

    const saveFavoriteItems = (favoriteItemIds) => {
         try {
             localStorage.setItem('favoriteItems', JSON.stringify(favoriteItemIds));
         } catch (e) {
             console.error('Error saving favorite items to localStorage:', e);
         }
    };


    // --- BİLDİRİM (TOAST) FONKSİYONU ---
    const showToast = (message, duration = 3000) => {
        if (!toastMessageElement) return;

        toastMessageElement.textContent = message;
        toastMessageElement.classList.add('show');

        // Belirtilen süre sonra mesajı gizle
        setTimeout(() => {
            toastMessageElement.classList.remove('show');
        }, duration);
    };


    // --- SAYFA GEÇİŞLERİ VE İÇERİK GÖSTERME/GİZLEME (Modallar ve Sidebar Hariç) ---
    // Tüm ana içerik alanlarını gizler (Modallara ve Sidebar'a dokunmaz)
    const hideAllContentAreas = () => {
        if(initialContent) initialContent.style.display = 'none';
        if(categoryProductsArea) categoryProductsArea.style.display = 'none';
        if(cartPage) cartPage.style.display = 'none';
        if(favoritesPage) favoritesPage.style.display = 'none';

         // Tüm nav butonlarından aktif class'ını kaldır (Sidebar ve Hesap hariç)
         bottomNavButtons.forEach(button => {
              // Account butonu ve Kategori butonu hariç (bunlar kendi aktifliklerini yönetir)
             if (button !== accountButton && button !== toggleCategoriesBtn) {
                  button.classList.remove('active');
             }
         });
         // Hesap butonu ve kategori butonu, sadece kendi olaylarında aktif olur/kalkar
    };

    // Belirtilen ANA içerik alanını gösterir ve bottom navbar'daki ilgili butonu aktif yapar
    const showContentArea = (pageId) => {
         // Sadece geçerli ana içerik alanları arasında geçiş yap
        const validPageIds = ['initial-content', 'category-products', 'cart-page', 'favorites-page'];
        if (validPageIds.includes(pageId)) {

             hideAllContentAreas(); // Diğer ana içerikleri gizle

            const targetElement = document.getElementById(pageId);
            if (targetElement) {
                targetElement.style.display = 'block'; // Hedef ANA alanı göster

                // Hedef sayfanın butonunu aktif yap (Eğer ilgili data-target-page varsa)
                const targetButton = document.querySelector(`.bottom-navbar a[data-target-page="${pageId}"]`);
                 if(targetButton) {
                      targetButton.classList.add('active');
                 }

                // Sayfa yüklendiğinde Sepet veya Favorileri render et
                if (pageId === 'cart-page') {
                     renderCart(); // Sepet içeriğini render et
                } else if (pageId === 'favorites-page') {
                     renderFavorites(); // Favori içeriğini render et
                } else if (pageId === 'initial-content') {
                     // Anasayfa yüklendiğinde öne çıkan ürünlerdeki favori ikonlarını güncelle
                      updateFavoriteIcons();
                }
                // Kategori sayfası renderCategoryProducts fonksiyonu tarafından yönetilir, orada ikonlar güncellenir.


                 // İsteğe bağlı: Sayfa değiştiğinde en üste kaydır
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    // Bottom navbar butonlarına tıklama olayları (Kategori ve Hesap Hariç)
    bottomNavButtons.forEach(button => {
        // Kategori butonu ve Hesap butonu özel olarak ele alınacakları için genel dinleyici dışında tutulur
        if (button === toggleCategoriesBtn || button === accountButton) {
             return;
        }

        // Diğer ANA sayfa butonları
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = button.dataset.targetPage; // data-target-page değerini al

            // Hedef ID'ye sahip bir element varsa ve bu bir modal tetikleyici değilse
            if (targetPage && document.getElementById(targetPage) && targetPage !== 'account-modal-trigger') {
                showContentArea(targetPage); // Ana sayfa geçişini yönet
            }
        });
    });


    // --- MEVCUT SCRIPT.JS İŞLEVLERİNİN GÜNCELLENMESİ ---

    // Sidebar Açma/Kapatma İşlevi
    if (toggleCategoriesBtn && categorySidebar) {
        toggleCategoriesBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const isHidden = categorySidebar.style.display === 'none' || categorySidebar.style.display === '';

            // Diğer ana içerik alanlarını gizle
            hideAllContentAreas();

            // Modalları kapat
            if(loginModal) loginModal.style.display = 'none';
            if(signupModal) signupModal.style.display = 'none';
             // Hesap butonu aktifliğini kaldır
             if(accountButton) accountButton.classList.remove('active');

            if (isHidden) {
                // Sidebar'ı göster
                categorySidebar.style.display = 'flex'; // veya 'block' CSS'e göre
                 // Sidebar açıldığında alt nav butonunu aktif yap
                 toggleCategoriesBtn.classList.add('active');
                 // Sidebar açıldığında anasayfa içeriğini göstermeye devam et (veya kategori ürünlerini gizle)
                 // showContentArea('initial-content'); // İsteğe bağlı: Sidebar açılınca anasayfaya dön
                 if(initialContent) initialContent.style.display = 'block'; // Sadece anasayfa içeriğini göster
                 if(categoryProductsArea) categoryProductsArea.style.display = 'none'; // Kategori ürünlerini gizle

            } else {
                // Sidebar'ı gizle
                categorySidebar.style.display = 'none';
                 // Sidebar kapandığında alt nav butonunu pasif yap
                 toggleCategoriesBtn.classList.remove('active');
                 // Sidebar kapandığında anasayfa içeriğini göster
                  showContentArea('initial-content'); // Anasayfaya geri dön
            }
        });
    }


    // Hesap Butonu (Modal Açma)
    if (accountButton && loginModal) { // Hesap butonu ve login modalı varsa
         accountButton.addEventListener('click', (event) => {
             event.preventDefault();

             // Tüm ana içerik alanlarını gizle
             hideAllContentAreas();

             // Sidebar'ı kapat
             if (categorySidebar && (categorySidebar.style.display !== 'none' && categorySidebar.style.display !== '')) {
                  categorySidebar.style.display = 'none';
                   if(toggleCategoriesBtn) toggleCategoriesBtn.classList.remove('active'); // Sidebar butonu pasif
             }

             // Sadece login modalı aç
             loginModal.style.display = 'flex';
             signupModal.style.display = 'none'; // Signup açıksa onu kapat

              // Tüm nav butonlarından aktif class'ını kaldır
             bottomNavButtons.forEach(button => {
                 button.classList.remove('active');
             });
              // Hesap butonunu aktif yap
             accountButton.classList.add('active');
         });
     }


    // Modal Kapatma İşlevi ('X' butonu)
     const closeModal = (modalElement, messageArea, formElement, relatedButton) => {
         if(modalElement) modalElement.style.display = 'none';
         if(messageArea) messageArea.textContent = '';
         if(formElement) formElement.reset();
         if(relatedButton) relatedButton.classList.remove('active');
          // Modal kapandığında anasayfa butonunu aktif yap ve anasayfayı göster
          const homeButton = document.querySelector('.bottom-navbar a[data-target-page="initial-content"]');
          if(homeButton) homeButton.classList.add('active');
          showContentArea('initial-content'); // Anasayfayı göster
     }

     if(loginCloseButton) {
         loginCloseButton.addEventListener('click', () => {
              closeModal(loginModal, loginMessageArea, loginForm, accountButton);
         });
     }
      if(signupCloseButton) {
         signupCloseButton.addEventListener('click', () => {
              closeModal(signupModal, signupMessageArea, signupForm, accountButton);
         });
     }


    // Modal dışına tıklayınca kapatma
    window.addEventListener('click', (event) => {
        // Tıklanan elementin tam olarak modal overlay'i olup olmadığını kontrol et
        if (loginModal && event.target === loginModal) {
            closeModal(loginModal, loginMessageArea, loginForm, accountButton);
        }
        if (signupModal && event.target === signupModal) {
            closeModal(signupModal, signupMessageArea, signupForm, accountButton);
        }
    });


    // Formlar Arası Geçiş İşlevi
    if (showSignupLink && loginModal && signupModal) {
        showSignupLink.addEventListener('click', (event) => {
            event.preventDefault();
            loginModal.style.display = 'none'; // Giriş modalını gizle
            signupModal.style.display = 'flex'; // Kayıt modalını göster
             // Formları ve mesajları temizle
             if(loginMessageArea) loginMessageArea.textContent = '';
             if(loginForm) loginForm.reset();
             if(signupMessageArea) signupMessageArea.textContent = '';
             if(signupForm) signupForm.reset();
                });
    }

    if (showLoginLink && loginModal && signupModal) {
        showLoginLink.addEventListener('click', (event) => {
            event.preventDefault();
            signupModal.style.display = 'none'; // Kayıt modalını gizle
            loginModal.style.display = 'flex'; // Giriş modalını göster
            // Formları ve mesajları temizle
            if(signupMessageArea) signupMessageArea.textContent = '';
             if(signupForm) signupForm.reset();
             if(loginMessageArea) loginMessageArea.textContent = '';
             if(loginForm) loginForm.reset();
        });
    }

    // Form Gönderme İşlevleri (Backend Gerektirir - Demo)
    if (loginForm && loginMessageArea) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            loginMessageArea.textContent = 'Giriş yapılıyor...';
            loginMessageArea.style.color = '#000'; // Varsayılan renk
            loginMessageArea.style.backgroundColor = 'transparent'; // Varsayılan arka plan

             // Demo başarılı mesajı göster
              setTimeout(() => {
                 loginMessageArea.textContent = 'Demo Giriş Başarılı!';
                 loginMessageArea.style.color = '#155724'; // Yeşil yazı
                 loginMessageArea.style.backgroundColor = '#d4edda'; // Açık yeşil arka plan
                 // İsteğe bağlı: Başarılı girişte modalı kapat
                 // setTimeout(() => { closeModal(loginModal, loginMessageArea, loginForm, accountButton); }, 1500);
              }, 2000);
        });
    }

     if (signupForm && signupMessageArea) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
             signupMessageArea.textContent = 'Kayıt yapılıyor...';
             signupMessageArea.style.color = '#000'; // Varsayılan renk
             signupMessageArea.style.backgroundColor = 'transparent'; // Varsayılan arka plan

            // Demo başarılı mesajı göster
             setTimeout(() => {
                 signupMessageArea.textContent = 'Demo Kayıt Başarılı!';
                 signupMessageArea.style.color = '#155724'; // Yeşil yazı
                 signupMessageArea.style.backgroundColor = '#d4edda'; // Açık yeşil arka plan
                 // İsteğe bağlı: Başarılı kayıtta modalı kapat
                 // setTimeout(() => { closeModal(signupModal, signupMessageArea, signupForm, accountButton); }, 1500);
             }, 2000);
        });
    }


    // Gmail ile Giriş İşlevi (Backend ve Google API Gerektirir - Demo)
     if (gmailLoginButtons.length > 0) {
         gmailLoginButtons.forEach(button => {
             button.addEventListener('click', (event) => {
                 event.preventDefault();
                 showToast('Demo: Gmail ile giriş işlevi backend ve Google API kurulumu gerektirir.');
             });
         });
    }


    // --- YENİ İŞLEVLER: ÜRÜN LİSTELEME, SEPET, FAVORİ VE BİLDİRİMLER ---

    // Ürün kartı HTML'i oluşturma fonksiyonu (açıklama eklendi)
    const createProductCardHtml = (product) => {
        // Favori durumu kontrol et ve ikon class'ını ayarla
        const favoriteItems = getFavoriteItems();
        const isFavorited = favoriteItems.includes(product.id);
        const favoriteIconClass = isFavorited ? 'favorite' : 'favorite_border'; // 'favorite' içi dolu kalp, 'favorite_border' boş kalp ikonudur

        return `
            <div class="product-card" data-product-id="${product.id}">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                 <p class="product-description">${product.description}</p> <p class="product-price">${product.price.toFixed(2).replace('.', ',')} TL</p>
                <div class="product-actions">
                    <span class="favorite-icon material-icons ${isFavorited ? 'favorited' : ''}" data-product-id="${product.id}">${favoriteIconClass}</span>
                    <button class="add-to-cart-button" data-product-id="${product.id}">Sepete Ekle</button>
                </div>
            </div>
        `;
    };


    // Favori ikonlarının durumunu güncelleme (Sayfa yüklendiğinde veya ürünler listelendiğinde çağrılır)
    const updateFavoriteIcons = () => {
        const favoriteItems = getFavoriteItems(); // localStorage'dan favori ID'lerini al
        const allFavoriteIcons = document.querySelectorAll('.product-card .favorite-icon'); // Sayfadaki tüm favori ikonlarını seç

        allFavoriteIcons.forEach(icon => {
            const productId = icon.dataset.productId;
            if (favoriteItems.includes(productId)) {
                // Eğer ürün favorilerdeyse ikonu dolu kalp yap ve 'favorited' class'ını ekle
                icon.textContent = 'favorite'; // Dolu kalp ikonu
                icon.classList.add('favorited');
            } else {
                // Eğer ürün favorilerde değilse ikonu boş kalp yap ve 'favorited' class'ını kaldır
                icon.textContent = 'favorite_border'; // Boş kalp ikonu
                icon.classList.remove('favorited');
            }
        });
    };


    // Sepet içeriğini render etme (Sepet sayfasına gidildiğinde çağrılır)
     const renderCart = () => {
        if (!cartItemsList) return;

        const cartItems = getCartItems(); // Sepet verilerini al
        cartItemsList.innerHTML = ''; // Listeyi temizle
        let total = 0;

        if (cartItems.length === 0) {
            cartItemsList.innerHTML = '<p style="text-align:center;">Sepetiniz boş.</p>';
             if(cartTotalSpan) cartTotalSpan.textContent = '0.00 TL';
             if(clearCartButton) clearCartButton.style.display = 'none'; // Sepeti temizle butonunu gizle
            return;
        }

         if(clearCartButton) clearCartButton.style.display = 'inline-block'; // Sepeti temizle butonunu göster

        cartItems.forEach(item => {
            // Ürün detaylarını ana products dizisinden bul
            const product = products.find(p => p.id === item.id);

            if (product) {
                const itemTotal = product.price * item.quantity;
                total += itemTotal;

                const cartItemHtml = `
                    <div class="cart-item" data-product-id="${product.id}">
                        <img src="${product.imageUrl}" alt="${product.name}">
                        <div class="cart-item-details">
                            <h3>${product.name}</h3>
                            <p>${product.price.toFixed(2).replace('.', ',')} TL x ${item.quantity}</p>
                        </div>
                        <div class="cart-item-quantity">
                             Miktar: ${item.quantity}
                        </div>
                         <div class="cart-item-remove">
                            <button class="remove-item-button material-icons" data-product-id="${product.id}">delete</button>
                        </div>
                    </div>
                `;
                cartItemsList.innerHTML += cartItemHtml;
            }
        });

        // Toplam fiyatı güncelle
        if(cartTotalSpan) cartTotalSpan.textContent = `${total.toFixed(2).replace('.', ',')} TL`;
     };


     // Sepetten ürün silme işlevi (renderCart içinde event delegation kullanılacak)
     if(cartItemsList) {
         cartItemsList.addEventListener('click', (event) => {
             const removeButton = event.target.closest('.remove-item-button'); // delete ikonuna en yakın butonu bul
             if (removeButton) {
                 const productId = removeButton.dataset.productId;
                 let cartItems = getCartItems();
                 // Belirtilen ürünü sepetten tamamen çıkar
                 cartItems = cartItems.filter(item => item.id !== productId);
                 saveCartItems(cartItems); // localStorage'ı güncelle
                 renderCart(); // Sepeti yeniden çiz
                 showToast('Ürün sepetten çıkarıldı.', 2000); // Bildirim göster
             }
         });
     }
    // Sepeti temizleme işlevi
     if(clearCartButton) {
         clearCartButton.addEventListener('click', () => {
             saveCartItems([]); // localStorage'daki sepeti boşalt
             renderCart(); // Sepeti yeniden çiz
             showToast('Sepet temizlendi.', 2000); // Bildirim göster
         });
     }


    // Favori içeriğini render etme (Favoriler sayfasına gidildiğinde çağrılır)
     const renderFavorites = () => {
         if (!favoriteItemsList) return;

         const favoriteItemIds = getFavoriteItems(); // Favori ürün ID'lerini al
         favoriteItemsList.innerHTML = ''; // Listeyi temizle

         if (favoriteItemIds.length === 0) {
             favoriteItemsList.innerHTML = '<p style="text-align:center;">Favorileriniz boş.</p>';
             return;
         }

         favoriteItemIds.forEach(productId => {
             // Ürün detaylarını ana products dizisinden bul
             const product = products.find(p => p.id === productId);

             if (product) {
                 // Favori sayfası için de product-card yapısını kullanabiliriz
                 // Favori kartlarında Sepete Ekle butonu ve dolu kalp ikonu olmalı
                 const productCardHtml = `
                     <div class="product-card favorite-item" data-product-id="${product.id}">
                         <img src="${product.imageUrl}" alt="${product.name}">
                         <h3>${product.name}</h3>
                          <p class="product-description">${product.description}</p> <p class="product-price">${product.price.toFixed(2).replace('.', ',')} TL</p>
                         <div class="product-actions">
                             <span class="remove-favorite-icon material-icons" data-product-id="${product.id}">favorite</span>
                              <button class="add-to-cart-button" data-product-id="${product.id}">Sepete Ekle</button>
                         </div>
                     </div>
                 `;
                 favoriteItemsList.innerHTML += productCardHtml;
             }
         });

          // Favori listesi render edildiğinde ikonları güncellemeye gerek yok, zaten render ederken ayarlandı.
          // Ancak eklenen kartlardaki "Sepete Ekle" butonlarına dinleyici eklenmeli veya event delegation kullanılmalı.
          // Event delegation kullandığımız için bu adıma gerek kalmaz.
          // Favori listesindeki ürünlerin de favori ikonlarının durumunu güncellemek için çağırabiliriz (kendilerini favorited olarak işaretlerler)
         //  updateFavoriteIcons(); // Zaten favori ürün listesi render edildiği için gereksiz olabilir.
     };


    // Favoriden ürün silme işlevi (renderFavorites içinde event delegation kullanılacak)
     if(favoriteItemsList) {
         favoriteItemsList.addEventListener('click', (event) => {
             const removeIcon = event.target.closest('.remove-favorite-icon'); // dolu kalp ikonuna en yakın ikonu bul
              // Eğer dolu kalbe tıklanırsa favoriden çıkar
             if (removeIcon && removeIcon.textContent === 'favorite') { // Sadece dolu kalbe tıklanırsa
                 const productId = removeIcon.dataset.productId;
                 let favoriteItemIds = getFavoriteItems();
                 // Belirtilen ürün ID'sini favorilerden çıkar
                 favoriteItemIds = favoriteItemIds.filter(id => id !== productId);
                 saveFavoriteItems(favoriteItemIds); // localStorage'ı güncelle
                 renderFavorites(); // Favoriler listesini yeniden çiz
                 showToast('Ürün favorilerden çıkarıldı.', 2000); // Bildirim göster

                  // Anasayfa veya kategori sayfasında bu ürünün ikonunu da güncelle
                 const iconInOtherLists = document.querySelector(`.product-card[data-product-id="${productId}"] .favorite-icon`);
                 if(iconInOtherLists) {
                      iconInOtherLists.textContent = 'favorite_border';
                      iconInOtherLists.classList.remove('favorited');
                 }
             }
         });
     }


    // Ürün Listeleri İçin Global Event Delegation (Sepete Ekle ve Favori İkonları)
    // initialContent ve categoryProductsArea içinde bulunan .product-list'ler için
    // Tüm tıklama olaylarını dinle ve hedefin Sepete Ekle veya Favori ikonu olup olmadığını kontrol et

    document.body.addEventListener('click', (event) => {
        const addToCartButton = event.target.closest('.add-to-cart-button');
        const favoriteIcon = event.target.closest('.favorite-icon');

        // Sepete Ekle butonuna tıklandıysa
        if (addToCartButton) {
            const productId = addToCartButton.dataset.productId;
            const product = products.find(p => p.id === productId); // Ürün detaylarını bul

            if (product) {
                let cartItems = getCartItems();
                const existingItemIndex = cartItems.findIndex(item => item.id === productId);

                if (existingItemIndex > -1) {
                    // Ürün zaten sepetteyse miktarını artır
                    cartItems[existingItemIndex].quantity += 1;
                } else {
                    // Ürün sepette yoksa, sepete ekle (miktar 1 ile)
                    cartItems.push({ id: productId, quantity: 1 });
                }

                saveCartItems(cartItems); // Sepeti güncelle
                showToast('Ürün sepete eklendi!', 2000); // Bildirim göster
                 // İsteğe bağlı: Sepet toplamını veya sayısını güncelleyen bir UI elementi varsa burada onu da güncelleyebilirsiniz
            } else {
                console.error('Sepete eklenmeye çalışılan ürün bulunamadı:', productId);
            }
        }

        // Favori ikonuna tıklandıysa
        if (favoriteIcon) {
            const productId = favoriteIcon.dataset.productId;
            let favoriteItemIds = getFavoriteItems(); // Favori ID'lerini al
            const isFavorited = favoriteItemIds.includes(productId); // Daha önce favoriye eklenmiş mi?

            if (isFavorited) {
                // Favorilerden çıkar
                favoriteItemIds = favoriteItemIds.filter(id => id !== productId);
                favoriteIcon.textContent = 'favorite_border'; // İkonu boş kalp yap
                favoriteIcon.classList.remove('favorited'); // 'favorited' class'ını kaldır
                showToast('Ürün favorilerden çıkarıldı.', 2000); // Bildirim göster
            } else {
                // Favorilere ekle
                favoriteItemIds.push(productId);
                favoriteIcon.textContent = 'favorite'; // İkonu dolu kalp yap
                favoriteIcon.classList.add('favorited'); // 'favorited' class'ını ekle
                showToast('Ürün favorilere eklendi!', 2000); // Bildirim göster
            }

            saveFavoriteItems(favoriteItemIds); // Favorileri güncelle
        }
    });


    // Dinamik Kategori İçerik Yükleme İşlevi (Güncellendi)
    const categoryLinks = document.querySelectorAll('.category-sidebar a[data-category]');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const categoryId = event.target.dataset.category;
            const categoryName = event.target.textContent;

            // Kategori ürünleri alanını göster
            showContentArea('category-products'); // showContentArea diğer ana içerikleri gizler

            if(categoryProductsArea) {
                 const h2Element = categoryProductsArea.querySelector('h2');
                 if(h2Element) h2Element.textContent = categoryName; // Başlığı tıklanan kategori adı yap

                 if(categoryProductList) {
                      categoryProductList.innerHTML = '<p style="text-align:center;">Yükleniyor...</p>'; // Yükleniyor mesajı göster

                      setTimeout(() => {
                           // İlgili kategoriye ait ürünleri filtrele
                          const categoryProducts = products.filter(product => product.category === categoryId || (categoryId === 'one-cikanlar' && product.isFeatured));

                          if (categoryProducts.length > 0) {
                              categoryProductList.innerHTML = ''; // Yükleniyor mesajını kaldır
                              categoryProducts.forEach(product => {
                                   // Her ürün için createProductCardHtml fonksiyonunu kullanarak HTML oluştur
                                   const productCardHtml = createProductCardHtml(product);
                                   categoryProductList.innerHTML += productCardHtml;
                              });
                             // Ürünler listelendikten sonra favori ikonlarını güncelle
                             // updateFavoriteIcons(); // Event delegation kullandığımız için render sırasında ikonlar zaten doğru ayarlanır
                                                               // Sadece ilk yüklemede veya sayfada ürün kartları varsa güncellemek yeterli.
                                                               // Global click listener ile favori toggle zaten ikonları güncelliyor.

                          } else {
                              categoryProductList.innerHTML = '<p style="text-align:center;">Bu kategoride ürün bulunamadı.</p>';
                          }

                           // Kategori seçildikten sonra sidebar'ı mobil görünümde kapat
                           if (categorySidebar && (categorySidebar.style.display !== 'none' && categorySidebar.style.display !== '')) {
                                if (window.innerWidth <= 768) {
                                   categorySidebar.style.display = 'none';
                                    if(toggleCategoriesBtn) toggleCategoriesBtn.classList.remove('active');
                                }
                           }

                      }, 300); // Kısa bir gecikme (demo amaçlı)
                 }
            }
        });
    });


    // Anasayfa Öne Çıkan Ürünleri Yükleme ve Favori İkonlarını Güncelleme
    // DOM yüklendiğinde veya Anasayfa'ya geçildiğinde çağrılır
    const renderFeaturedProducts = () => {
        if (initialProductList) {
             initialProductList.innerHTML = ''; // Mevcut öne çıkanları temizle (varsa)

            const featuredProducts = products.filter(product => product.isFeatured);

            if (featuredProducts.length > 0) {
                featuredProducts.forEach(product => {
                    const productCardHtml = createProductCardHtml(product);
                    initialProductList.innerHTML += productCardHtml;
                });
                 // Öne çıkan ürünler listelendikten sonra favori ikonlarını güncelle
                // updateFavoriteIcons(); // Event delegation kullandığımız için render sırasında ikonlar zaten doğru ayarlanır
                                        // Sadece ilk yüklemede veya sayfada ürün kartları varsa güncellemek yeterli.
                                        // Global click listener ile favori toggle zaten ikonları güncelliyor.
            } else {
                 initialProductList.innerHTML = '<p style="text-align:center;">Öne çıkan ürün bulunamadı.</p>';
            }
        }
    };


    // --- Başlangıç Ayarları ---

    // 1. Sayfa ilk yüklendiğinde URL hash'ine göre ilgili içeriği veya anasayfayı göster
     const initialHash = window.location.hash.substring(1);
     const validContentPageIds = ['initial-content', 'cart-page', 'favorites-page', 'category-products']; // 'category-products' hash ile direk açılmayabilir ama tanımlı

     // Hash'e göre modal aç (Eğer hash bir modal ID'si ise)
     if ((initialHash === 'loginModal' && loginModal) || (initialHash === 'signupModal' && signupModal)) {
         if (initialHash === 'loginModal' && loginModal) {
              loginModal.style.display = 'flex';
         } else if (initialHash === 'signupModal' && signupModal) {
             signupModal.style.display = 'flex';
         }
         // Modal açıldığında hesap butonunu aktif yap (eğer element varsa)
          if (accountButton) {
              bottomNavButtons.forEach(button => button.classList.remove('active')); // Diğerlerini pasif yap
              accountButton.classList.add('active');
          }
          // Modal açıldığında ana içerik alanları gizli kalır (showContentArea çağrılmaz)

     } else if (validContentPageIds.includes(initialHash)) {
          // Eğer hash geçerli bir içerik sayfası ID'si ise, o sayfayı göster
          // Not: 'category-products' hash'i tek başına yeterli değil, hangi kategori olduğu da bilinmeli.
          // Basitlik için şimdilik sadece 'initial-content', 'cart-page', 'favorites-page' hashlerini destekleyelim.
          if (initialHash === 'initial-content' || initialHash === 'cart-page' || initialHash === 'favorites-page') {
              showContentArea(initialHash);
          } else {
               // Bilinmeyen veya desteklenmeyen hash durumunda anasayfayı göster
               showContentArea('initial-content');
          }


     } else if (initialHash === 'account') { // Sadece #account hash'i varsa (modalı açmaz, sadece butonu aktif yapar)
           if (accountButton) {
              bottomNavButtons.forEach(button => button.classList.remove('active'));
              accountButton.classList.add('active');
           }
           // Anasayfayı göster (Hesap modalı hash ile otomatik açılmayacaksa)
           showContentArea('initial-content');

     } else {
          // Geçerli bir hash yoksa, anasayfayı göster (varsayılan)
          showContentArea('initial-content');
     }

     // 2. Anasayfa öne çıkan ürünleri render et
     renderFeaturedProducts();

     // 3. Tüm ürün kartlarındaki (hem anasayfa hem kategori alanı) favori ikonlarının durumunu localStorage'a göre ayarla
     // renderFeaturedProducts veya renderCategoryProducts çağrıldığında bu zaten yapılıyor
     // Ancak DOM tamamen yüklendiğinde de bir kez çağırmak iyi olabilir, tüm kartları kapsar
     // updateFavoriteIcons(); // Event Delegation sayesinde click olayında doğru çalışıyor, render ederken de ayarlanıyor. Buraya gerek kalmadı.


}); // DOMContentLoaded sonu
