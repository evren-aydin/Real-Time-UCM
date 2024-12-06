# React + Vite,Node.js ve WebSocket teknolojileri kullanılarak,

Real-Time UCM(User Connection Monitoring) uygulaması yapılması hedeflenmiştir. chat kısmında farklı sekmelere açılan penceler üzerinden kullanıcılar isim bilgileri ile giriş yapıp sunucu üzerinde haberleşebilirler.

Sunucu üzerinde broadcast işlemi yapılarak, WebSocket sunucusunda mesajları yayınlanması sağlanmıştır. istemciden gelecek mesajı diğer tüm bağlı istemcilere iletecek bir yayın mekanizması.

daha sonra uygulamada Dashboard üzerinden Chart.js kullanılarak
-Aktif kullanıcı sayısı
-Kullanıcıların bağlantılarını izlemek için canlı bir log sistemi
-kişisel kullanıcı bilgileri (IP adresi,baglantı süresi)
![rtucm-code-1](https://github.com/user-attachments/assets/60384bbc-3407-45c0-a349-ce1ac610e074)
yukarıdaki resimde react mimarisine bağlı olarak yukarıdan aşağı bir veri akışı vardır. Chat ve Dashboard page'e gidecek stateler ayrı ayrı işaretlenmiştir. Aşağıda sırasıyla kod ve uygulama görsellerini inceleyebilirsiniz.
![rtucm-code-2](https://github.com/user-attachments/assets/2cd395f3-d785-4b91-aa92-77c949820aa2)
![rtucm-1](https://github.com/user-attachments/assets/2ec41b15-69e7-4089-9059-785908f3d71a)
![rtucm-2](https://github.com/user-attachments/assets/dd520313-0c1a-4f99-ac9a-0523d6332acc)
![rtucm-3](https://github.com/user-attachments/assets/fa0f128a-a081-43e6-9048-c45330873269)
![rtucm-4](https://github.com/user-attachments/assets/f14e1062-4678-46ef-9872-b3c12fe9d811)
![rtucm-5](https://github.com/user-attachments/assets/815dfe4e-9d9b-4eac-a214-fc17f11ce63c)
![rtucm-6](https://github.com/user-attachments/assets/338bf68f-ef43-4621-bf00-6de7c690a70d)
