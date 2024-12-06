# React + Vite,Node.js ve WebSocket teknolojileri kullanılarak,

Real-Time UCM(User Connection Monitoring) uygulaması yapılması hedeflenmiştir. chat kısmında farklı sekmelere açılan penceler üzerinden kullanıcılar isim bilgileri ile giriş yapıp sunucu üzerinde haberleşebilirler.

Sunucu üzerinde broadcast işlemi yapılarak, WebSocket sunucusunda mesajları yayınlanması sağlanmıştır. istemciden gelecek mesajı diğer tüm bağlı istemcilere iletecek bir yayın mekanizması.

daha sonra uygulamada Dashboard üzerinden Chart.js kullanılarak
-Aktif kullanıcı sayısı
-Kullanıcıların bağlantılarını izlemek için canlı bir log sistemi
-kişisel kullanıcı bilgileri (IP adresi,baglantı süresi)
