const support = [
  {
    q: {
      zh: "照片保存在哪里？",
      en: "Where are my photos stored?",
      de: "Wo werden meine Fotos gespeichert?",
      fr: "Où sont stockées mes photos ?",
      ja: "写真はどこに保存されますか？",
      ko: "사진은 어디에 저장되나요?",
      es: "¿Dónde se guardan mis fotos?"
    },
    a: {
      zh: "拍摄的照片保存在 LUMAVINT 的 App 受保护存储空间内，可以从 App 内的「照片」页面查看。",
      en: "Captured photos are kept in LUMAVINT’s protected app storage and can be viewed from PHOTOS inside the app.",
      de: "Aufgenommene Fotos werden im geschützten App-Speicher von LUMAVINT abgelegt und können in der App unter FOTOS angesehen werden.",
      fr: "Les photos prises sont conservées dans le stockage protégé de LUMAVINT et peuvent être consultées dans PHOTOS.",
      ja: "撮影した写真は LUMAVINT の保護されたアプリ内ストレージに保存され、アプリ内の「写真」から確認できます。",
      ko: "촬영한 사진은 LUMAVINT의 보호된 앱 저장 공간에 보관되며 앱의 사진 화면에서 볼 수 있습니다.",
      es: "Las fotos capturadas se guardan en el almacenamiento protegido de LUMAVINT y pueden verse en FOTOS dentro de la app."
    }
  },
  {
    q: {
      zh: "如何导出照片？",
      en: "How do I export a photo?",
      de: "Wie exportiere ich ein Foto?",
      fr: "Comment exporter une photo ?",
      ja: "写真を書き出すには？",
      ko: "사진을 내보내려면 어떻게 하나요?",
      es: "¿Cómo exporto una foto?"
    },
    a: {
      zh: "在「照片」中打开照片并点击导出。导出属于 LUMAVINT Pro 功能，首次导出时 iOS 会请求仅添加照片权限。",
      en: "Open a saved photo and choose export. Exporting is included with LUMAVINT Pro; iOS asks for add-only Photos access on the first export.",
      de: "Öffne ein gespeichertes Foto und wähle Export. Der Export ist Teil von LUMAVINT Pro; iOS fragt beim ersten Export nach der Berechtigung zum Hinzufügen zu Fotos.",
      fr: "Ouvrez une photo enregistrée puis choisissez l’export. L’export fait partie de LUMAVINT Pro ; iOS demande l’autorisation d’ajout à Photos lors du premier export.",
      ja: "保存した写真を開き、書き出しを選びます。書き出しは LUMAVINT Pro に含まれ、初回は写真への追加権限が表示されます。",
      ko: "저장된 사진을 열고 내보내기를 선택하세요. 내보내기는 LUMAVINT Pro에 포함되며, 처음에는 사진 앱에 추가 권한을 요청합니다.",
      es: "Abre una foto guardada y elige exportar. La exportación está incluida en LUMAVINT Pro; iOS pedirá permiso para añadir a Fotos la primera vez."
    }
  },
  {
    q: {
      zh: "如何恢复 LUMAVINT Pro？",
      en: "How do I restore LUMAVINT Pro?",
      de: "Wie stelle ich LUMAVINT Pro wieder her?",
      fr: "Comment restaurer LUMAVINT Pro ?",
      ja: "LUMAVINT Pro を復元するには？",
      ko: "LUMAVINT Pro를 복원하려면 어떻게 하나요?",
      es: "¿Cómo restauro LUMAVINT Pro?"
    },
    a: {
      zh: "点击金色 PRO 按钮，选择「恢复购买」，并使用购买时的同一 Apple 账户。",
      en: "Open the gold PRO button, choose Restore Purchases, and use the same Apple Account as the original purchase.",
      de: "Öffne den goldenen PRO-Button, wähle „Käufe wiederherstellen“ und verwende dieselbe Apple-ID wie beim Kauf.",
      fr: "Ouvrez le bouton PRO doré, choisissez « Restaurer les achats » et utilisez le même compte Apple que lors de l’achat.",
      ja: "金色の PRO ボタンを開き、「購入を復元」を選び、購入時と同じ Apple Account を使用してください。",
      ko: "금색 PRO 버튼을 열고 ‘구매 복원’을 선택한 뒤 구매 당시와 같은 Apple 계정을 사용하세요.",
      es: "Abre el botón PRO dorado, elige Restaurar compras y usa la misma cuenta de Apple de la compra."
    }
  },
  {
    q: {
      zh: "相机无法打开怎么办？",
      en: "What if the camera does not open?",
      de: "Was tun, wenn die Kamera nicht öffnet?",
      fr: "Que faire si l’appareil photo ne s’ouvre pas ?",
      ja: "カメラが開かない場合は？",
      ko: "카메라가 열리지 않으면 어떻게 하나요?",
      es: "¿Qué hago si la cámara no se abre?"
    },
    a: {
      zh: "前往 iOS「设置」→「App」→「LUMAVINT」→「相机」允许访问。设备管理和屏幕使用时间限制也需要检查。",
      en: "In iOS Settings, open Apps → LUMAVINT → Camera and allow access. Also check device-management or Screen Time restrictions.",
      de: "Öffne in den iOS-Einstellungen Apps → LUMAVINT → Kamera und erlaube den Zugriff. Prüfe auch Geräteverwaltung und Bildschirmzeit.",
      fr: "Dans Réglages iOS, ouvrez Apps → LUMAVINT → Appareil photo et autorisez l’accès. Vérifiez aussi la gestion de l’appareil et Temps d’écran.",
      ja: "iOS の「設定」→「App」→「LUMAVINT」→「カメラ」でアクセスを許可してください。デバイス管理やスクリーンタイムも確認してください。",
      ko: "iOS 설정 → 앱 → LUMAVINT → 카메라에서 접근을 허용하고 기기 관리 및 스크린 타임 제한도 확인하세요.",
      es: "En Ajustes de iOS, abre Apps → LUMAVINT → Cámara y permite el acceso. Revisa también Gestión del dispositivo y Tiempo de uso."
    }
  }
];

const privacy = [
  {
    h: {
      zh: "数据收集",
      en: "Data collection",
      de: "Datenerhebung",
      fr: "Collecte de données",
      ja: "データの収集",
      ko: "데이터 수집",
      es: "Recopilación de datos"
    },
    p: {
      zh: "开发者不会通过 LUMAVINT 收集个人信息、照片内容、广告标识符、使用分析或精确位置。App 不要求创建账户。",
      en: "The developer does not collect personal information, photo content, advertising identifiers, usage analytics, or precise location through LUMAVINT. No account is required.",
      de: "Der Entwickler erhebt über LUMAVINT keine personenbezogenen Daten, Fotoinhalte, Werbe-IDs, Nutzungsanalysen oder genauen Standortdaten. Ein Konto ist nicht erforderlich.",
      fr: "Le développeur ne collecte pas, via LUMAVINT, de données personnelles, contenus photo, identifiants publicitaires, analyses d’usage ni localisation précise. Aucun compte n’est requis.",
      ja: "開発者は LUMAVINT を通じて、個人情報、写真の内容、広告識別子、利用分析、正確な位置情報を収集しません。アカウントは不要です。",
      ko: "개발자는 LUMAVINT을 통해 개인 정보, 사진 내용, 광고 식별자, 사용 분석, 정확한 위치를 수집하지 않습니다. 계정이 필요하지 않습니다.",
      es: "El desarrollador no recopila mediante LUMAVINT información personal, contenido de fotos, identificadores publicitarios, analíticas de uso ni ubicación precisa. No se necesita cuenta."
    }
  },
  {
    h: {
      zh: "相机与照片",
      en: "Camera and photos",
      de: "Kamera und Fotos",
      fr: "Appareil photo et photos",
      ja: "カメラと写真",
      ko: "카메라와 사진",
      es: "Cámara y fotos"
    },
    p: {
      zh: "相机权限只用于取景和拍摄。照片在设备本地处理并保存在 App 空间。只有在你主动导出时，才会请求仅添加照片权限并写入系统照片图库。删除 App 会移除只存在于 App 内的照片；已经导出的照片会保留在系统照片图库。",
      en: "Camera access is used only for the viewfinder and requested capture. Photos are processed on-device and stored in app storage. Add-only Photos access is requested when you choose to export. Deleting the app removes app-only photos; exported copies remain in Photos until you delete them.",
      de: "Der Kamerazugriff dient nur Sucher und Aufnahme. Fotos werden lokal verarbeitet und im App-Speicher abgelegt. Die Berechtigung zum Hinzufügen zu Fotos wird nur beim Export angefragt. Beim Löschen der App werden nur App-Fotos entfernt; exportierte Kopien bleiben in Fotos.",
      fr: "L’appareil photo sert uniquement au viseur et à la prise de vue demandée. Les photos sont traitées localement et stockées dans l’app. L’accès en ajout seul à Photos est demandé lors de l’export. Supprimer l’app supprime ses photos internes ; les copies exportées restent dans Photos.",
      ja: "カメラはファインダーと撮影にのみ使用します。写真は端末内で処理され、アプリ内に保存されます。写真への追加権限は書き出し時のみ要求されます。アプリを削除するとアプリ内写真は削除されますが、書き出し済みの写真は写真アプリに残ります。",
      ko: "카메라는 뷰파인더와 촬영에만 사용됩니다. 사진은 기기에서 처리되어 앱 저장 공간에 보관됩니다. 사진 앱에 추가 권한은 내보낼 때만 요청합니다. 앱을 삭제하면 앱 내부 사진은 삭제되지만 내보낸 사본은 사진 앱에 남습니다.",
      es: "La cámara solo se usa para el visor y la captura solicitada. Las fotos se procesan en el dispositivo y se guardan en la app. El permiso para añadir a Fotos se solicita únicamente al exportar. Al borrar la app se eliminan sus fotos internas; las copias exportadas permanecen en Fotos."
    }
  },
  {
    h: {
      zh: "购买与追踪",
      en: "Purchases and tracking",
      de: "Käufe und Tracking",
      fr: "Achats et suivi",
      ja: "購入とトラッキング",
      ko: "구매 및 추적",
      es: "Compras y seguimiento"
    },
    p: {
      zh: "LUMAVINT Pro 由 Apple 处理。App 只接收解锁和恢复购买所需的已验证交易信息。LUMAVINT 不包含广告 SDK、跨 App 追踪或开发者自建分析服务。",
      en: "LUMAVINT Pro purchases are handled by Apple. The app receives only verified transaction information needed to unlock and restore access. LUMAVINT contains no advertising SDK, cross-app tracking, or developer-operated analytics.",
      de: "LUMAVINT Pro wird von Apple abgewickelt. Die App erhält nur die zur Freischaltung und Wiederherstellung nötigen verifizierten Transaktionsdaten. LUMAVINT enthält keine Werbe-SDKs, kein appübergreifendes Tracking und keine eigenen Analysedienste.",
      fr: "Les achats LUMAVINT Pro sont gérés par Apple. L’app reçoit uniquement les informations de transaction vérifiées nécessaires au déblocage et à la restauration. LUMAVINT ne contient ni SDK publicitaire, ni suivi entre apps, ni analyse exploitée par le développeur.",
      ja: "LUMAVINT Pro の購入は Apple が処理します。アプリは解除と復元に必要な検証済み取引情報のみを受け取ります。広告 SDK、アプリ間トラッキング、開発者独自の分析はありません。",
      ko: "LUMAVINT Pro 구매는 Apple에서 처리합니다. 앱은 잠금 해제와 복원에 필요한 검증된 거래 정보만 받습니다. 광고 SDK, 앱 간 추적, 개발자 운영 분석은 없습니다.",
      es: "Apple gestiona las compras de LUMAVINT Pro. La app solo recibe la información verificada necesaria para desbloquear y restaurar el acceso. No hay SDK publicitario, seguimiento entre apps ni analíticas del desarrollador."
    }
  },
  {
    h: {
      zh: "支持邮件与托管服务",
      en: "Support requests and hosting",
      de: "Support-Anfragen und Hosting",
      fr: "Demandes d’assistance et hébergement",
      ja: "サポートへのお問い合わせとホスティング",
      ko: "지원 요청 및 호스팅",
      es: "Solicitudes de soporte y alojamiento"
    },
    p: {
      zh: "如果你主动发送支持邮件，我们会收到你提供的邮箱地址、邮件内容及自愿附带的文件，仅用于回复和支持排查，并按处理请求所需的期限保存。GitHub Pages 托管方可能处理页面访问所必需的技术日志。LUMAVINT 不会把照片上传到开发者服务器。",
      en: "If you email support, we receive the address, message, and any files you choose to provide. This information is used only to respond and troubleshoot and is retained only as long as needed to handle the request. GitHub Pages hosting may process standard technical logs required to serve the page. LUMAVINT does not upload your photos to a developer server.",
      de: "Wenn du den Support per E-Mail kontaktierst, erhalten wir die angegebene E-Mail-Adresse, den Nachrichteninhalt und freiwillig beigefügte Dateien. Diese Angaben werden nur zur Beantwortung und Fehleranalyse verwendet und nur so lange aufbewahrt, wie es für die Bearbeitung erforderlich ist. Der GitHub-Pages-Hoster kann technische Standardprotokolle für den Seitenabruf verarbeiten. LUMAVINT lädt deine Fotos nicht auf einen Entwicklerserver hoch.",
      fr: "Si vous écrivez à l’assistance, nous recevons l’adresse indiquée, le message et les éventuels fichiers que vous choisissez de joindre. Ces informations servent uniquement à répondre et à diagnostiquer le problème, et sont conservées seulement le temps nécessaire au traitement. L’hébergeur GitHub Pages peut traiter des journaux techniques standards nécessaires à la diffusion de la page. LUMAVINT ne téléverse pas vos photos vers un serveur du développeur.",
      ja: "サポートへメールを送る場合、記載されたメールアドレス、本文、任意で添付したファイルを受け取ります。これらは返信と問題調査のみに使用し、対応に必要な期間だけ保存します。GitHub Pages のホスティング事業者は、ページ配信に必要な標準的な技術ログを処理する場合があります。LUMAVINT は写真を開発者のサーバーへアップロードしません。",
      ko: "지원 이메일을 보내면 제공한 이메일 주소, 메시지 내용 및 자발적으로 첨부한 파일을 받습니다. 이 정보는 답변과 문제 해결에만 사용하며 요청 처리에 필요한 기간 동안만 보관합니다. GitHub Pages 호스팅 제공업체는 페이지 제공에 필요한 표준 기술 로그를 처리할 수 있습니다. LUMAVINT는 사진을 개발자 서버에 업로드하지 않습니다.",
      es: "Si escribes al soporte, recibiremos la dirección indicada, el mensaje y los archivos que decidas adjuntar. Esta información se usa únicamente para responder y resolver la consulta, y se conserva solo durante el tiempo necesario para atenderla. El proveedor de alojamiento de GitHub Pages puede procesar registros técnicos estándar necesarios para servir la página. LUMAVINT no sube tus fotos a un servidor del desarrollador."
    }
  }
];

const ui = {
  zh: {
    supportNav: "支持", privacyNav: "隐私", eyebrow: "LUMAVINT · 复古光影",
    heroTitle: "留一点安静给日常。" ,
    heroBody: "LUMAVINT 的支持与隐私信息。",
    languageLabel: "语言", supportLabel: "支持", supportTitle: "需要什么帮助？",
    privacyLabel: "隐私", privacyTitle: "隐私政策",
    effectiveDate: "生效日期：2026 年 11 月 7 日",
    contactLabel: "联系我们", contactTitle: "给我们写信",
    footerNote: "照片拍摄与处理在设备本地完成。",
    faqTitle: "常见问题"
  },
  en: {
    supportNav: "Support", privacyNav: "Privacy", eyebrow: "LUMAVINT · RETRO LIGHT",
    heroTitle: "Quiet color. Lasting moments.",
    heroBody: "Help and privacy information for LUMAVINT.",
    languageLabel: "Language", supportLabel: "SUPPORT", supportTitle: "How can we help?",
    privacyLabel: "PRIVACY", privacyTitle: "Privacy Policy",
    effectiveDate: "Effective 7 November 2026",
    contactLabel: "CONTACT", contactTitle: "Talk to a person",
    footerNote: "Photo capture and processing stay on your device.",
    faqTitle: "Frequently asked questions"
  },
  de: {
    supportNav: "Hilfe", privacyNav: "Datenschutz", eyebrow: "LUMAVINT · RETRO-LICHT",
    heroTitle: "Ruhige Farbe. Bleibende Momente.",
    heroBody: "Hilfe und Datenschutz für LUMAVINT.",
    languageLabel: "Sprache", supportLabel: "HILFE", supportTitle: "Wie können wir helfen?",
    privacyLabel: "DATENSCHUTZ", privacyTitle: "Datenschutzerklärung",
    effectiveDate: "Gültig ab 7. November 2026",
    contactLabel: "KONTAKT", contactTitle: "Schreib uns",
    footerNote: "Aufnahme und Verarbeitung erfolgen auf deinem Gerät.",
    faqTitle: "Häufige Fragen"
  },
  fr: {
    supportNav: "Aide", privacyNav: "Confidentialité", eyebrow: "LUMAVINT · LUMIÈRE RÉTRO",
    heroTitle: "Couleurs sobres. Instants durables.",
    heroBody: "Aide et confidentialité pour LUMAVINT.",
    languageLabel: "Langue", supportLabel: "AIDE", supportTitle: "Comment pouvons-nous aider ?",
    privacyLabel: "CONFIDENTIALITÉ", privacyTitle: "Politique de confidentialité",
    effectiveDate: "En vigueur le 7 novembre 2026",
    contactLabel: "CONTACT", contactTitle: "Écrivez-nous",
    footerNote: "La capture et le traitement restent sur votre appareil.",
    faqTitle: "Questions fréquentes"
  },
  ja: {
    supportNav: "サポート", privacyNav: "プライバシー", eyebrow: "LUMAVINT · レトロ光景",
    heroTitle: "静かな色を、日常に。",
    heroBody: "LUMAVINT のサポートとプライバシー情報。",
    languageLabel: "言語", supportLabel: "サポート", supportTitle: "お困りですか？",
    privacyLabel: "プライバシー", privacyTitle: "プライバシーポリシー",
    effectiveDate: "2026年11月7日 発効",
    contactLabel: "お問い合わせ", contactTitle: "メールで相談",
    footerNote: "撮影と処理は端末内で行われます。",
    faqTitle: "よくある質問"
  },
  ko: {
    supportNav: "지원", privacyNav: "개인정보", eyebrow: "LUMAVINT · 레트로 라이트",
    heroTitle: "차분한 색, 오래 남는 순간.",
    heroBody: "LUMAVINT 지원 및 개인정보 안내.",
    languageLabel: "언어", supportLabel: "지원", supportTitle: "무엇을 도와드릴까요?",
    privacyLabel: "개인정보", privacyTitle: "개인정보 처리방침",
    effectiveDate: "2026년 11월 7일 시행",
    contactLabel: "문의", contactTitle: "메일로 문의하기",
    footerNote: "촬영과 처리는 기기에서 이루어집니다.",
    faqTitle: "자주 묻는 질문"
  },
  es: {
    supportNav: "Ayuda", privacyNav: "Privacidad", eyebrow: "LUMAVINT · LUZ RETRO",
    heroTitle: "Color sereno. Momentos que quedan.",
    heroBody: "Ayuda y privacidad de LUMAVINT.",
    languageLabel: "Idioma", supportLabel: "AYUDA", supportTitle: "¿Cómo podemos ayudarte?",
    privacyLabel: "PRIVACIDAD", privacyTitle: "Política de privacidad",
    effectiveDate: "En vigor desde el 7 de noviembre de 2026",
    contactLabel: "CONTACTO", contactTitle: "Escríbenos",
    footerNote: "La captura y el procesamiento se realizan en tu dispositivo.",
    faqTitle: "Preguntas frecuentes"
  }
};

const keys = { "zh-Hans": "zh", en: "en", de: "de", fr: "fr", ja: "ja", ko: "ko", es: "es" };

function localized(value, lang) {
  return value[keys[lang]] || value.en || value.zh;
}

function render(lang) {
  const strings = ui[keys[lang]] || ui.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-ui]").forEach(node => {
    const value = strings[node.dataset.ui];
    if (value) node.textContent = value;
  });

  document.getElementById("supportContent").innerHTML = `
    <h3>${strings.faqTitle}</h3>
    <div class="faq">
      ${support.map(item => `<article><h3>${localized(item.q, lang)}</h3><p>${localized(item.a, lang)}</p></article>`).join("")}
    </div>`;

  document.getElementById("privacyContent").innerHTML = privacy
    .map(item => `<h3>${localized(item.h, lang)}</h3><p>${localized(item.p, lang)}</p>`)
    .join("");
}

const select = document.getElementById("language");
const browserLanguage = navigator.language.toLowerCase();
const initial = [...select.options].map(option => option.value)
  .find(language => browserLanguage.startsWith(language.toLowerCase())) || "zh-Hans";
select.value = initial;
select.addEventListener("change", event => render(event.target.value));
render(initial);
