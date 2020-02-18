let heading = document.querySelector(".heading");
let nextQ = document.querySelector(".nextQ");
let prevQ = document.querySelector(".prevQ");
let list = document.querySelector(".list");
let buttons = document.querySelector(".myContainer");
let listItem = document.querySelectorAll("label");
let alertMessage = document.querySelector(".Notification");
let inputs = document.querySelectorAll("input");
let finish_btn = document.querySelector(".finish_btn");
let answers = [];
let progress = document.getElementById("progress_id");
let width =0;

/*----------------------My Code -----------------------*/
let nextQ_btn = document.getElementById("nextQ-btn");
let question_id = [
"1- به کتاب و کتابخوانی علاقه دارم.",
"2- می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم.",
"3- وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم.",
"4- من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم.",
"5- افراد اغلب با من مشورت می کنند.",
"6- من معمولاً زمانی را در تنهایی صرف تفکّر، مراقبه و اندیشیدن در مورد سؤالات مهم زندگی می کنم.",
"7- من از صدای دلنشینی برای خواندن برخوردارم.",
"8- من همه ی انواع حیوانات را دوست دارم.",
"9- قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم.",
"10- در مدرسه از درس هایی چون ریاضیات و علوم لذّت می برم.",
"11- من نسبت به رنگ ها علاقمند و حساسم.",
"12- خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم.",
"13- ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.",
"14- در جلساتی که به رشد و آگاهی های فردی ام افزوده می شود شرکت می کنم.",
"15- آهنگ های ناموزون و سازهای خارج از ریتم را تشخیص می دهم.",
"16- دوست دارم چیزهایی را سازمان بندی یا مرتب کنم.",
"17- گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد.",
"18- از بازی های منطقی، معماها و سایر بازی های فکری (از قبیل شطرنج) لذّت می برم.",
"19- اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلم برداری استفاده می کنم.",
"20- به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری، مدل سازی و حکّاکی علاقمندم.",
"21- وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.",
"22- قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم.",
"23- اغلب به موزیک هایی از رادیو یا ضبط صوت یا سی دی و غیره گوش می دهم.",
"24- من از طبیعت لذّت می برم.",
"25- من از بازی با کلمات مانند جدول کلمات متقاطع، جملات درهم ریخته یا اسم رمزها لذّت می برم.",
"26- دوست دارم آزمایش هایی (اگر…آنگاه) ترتیب دهم. (مثلاً اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد؟)",
"27- من از معماهای دیداری مانند پازل ها و تصاویر سه بعدی لذّت می برم.",
"28- بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی(از قبیل پیاده روی، دو، شنا و…) هستم.",
"29- من حداقل سه دوست نزدیک و صمیمی دارم.",
"30- یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می دهم.",
"31- یکی از آلات موسیقی را می نوازم.",
"32- من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر، کارت های ورزشی … را جمع می کنم.",
"33- من اغراق های زبانی، ایهام، آهنگ های بی معنی و کلمات دوپهلو را دوست دارم.",
"34- من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.",
"35- در خواب رؤیاهای روشنی می بینم.",
"36- اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم.",
"37- من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.",
"38- اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.",
"39- زندگی من بدون موسیقی بسیار یکنواخت و بی هیجان خواهد بود.",
"40- من مرتباً گزارش تغییرات هوایی را کنترل می کنم.",
"41- دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستند.",
"42- درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.",
"43- معمولاً قادرم مسیر در یک محل ناآشنا پیدا کنم.",
"44- هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها و زبان بدن (مانند تغییر چهره) استفاده کنم.",
"45- از آموزش دادن دانسته هایم به دیگران لذّت می برم.",
"46- من از طریق عکس العمل دیگران، دیدگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.",
"47- اغلب در طی روز مدام یک آهنگ در ذهنم اجرا می شود.",
"48- تفاوت های موجود میان انواع درختان، سنگ ها، پرندگان یا سایر گیاهان و جانوران را به خوبی بیان می کنم.",
"49- وقتی در ماشین هستم دوست دارم علائم و تابلوهای تبلیغاتی را بخوانم و به آن ها بیشتر از مناظر اطراف توجه کنم.",
"50- باور دارم تقریباً برای هر چیزی یک تفسیر منطقی وجود دارد.",
"51- من طراحی را دوست دارم و من اغلب طراحی می کنم.",
"52- من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آن ها یاد بگیرم.",
"53- فکر می کنم قدرت رهبری خوبی دارم و اطرافیان و دوستانم نیز این موضوع را قبول دارند.",
"54- من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.",
"55- با استفاده از یک ابزار موسیقی ساده به راحتی می توانم اوقات فراغت خود را سپری کنم.",
"56- من از ماهیگیری، باغبانی، کاشتن گیاهان و آشپزی لذّت می برم.",
"57- اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلاً خوانده یا شنیده ام.",
"58- من می توانم به صورت واضح به مفاهیم غیرملموس، انتزاعی و خیالی فکر کنم.",
"59- جغرافیا از ریاضی برایم آسان تر است.",
"60- من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پرهیجان) لذّت می برم.",
"61- من در میان جمع احساس راحتی می کنم.",
"62- من با اراده و مستقل هستم.",
"63- آهنگ های بسیاری از آوازها یا قطعات موسیقی را می دانم.",
"64- از مشاهده رویدادهای طبیعی( مانند ستاره ها، ماه، جزر و مد) لذّت برده و دوست دارم جزئیات اطّلاعات درباره ی آن ها را به دست آورم.",
"65- اغلب اطرافیانم معنی کلمات را از من می پرسند.",
"66- به کشف عیوب منطقی کارهایی که مردم در خانه و محل کار خود انجام می دهند یا در مورد آن ها صحبت می کنند، علاقه دارم.",
"67- می توانم تصور کنم (از نگاه یک پرنده)، اجسام از بالا چگونه به نظر می رسند.",
"68- من از نظر جسمی و اندازه اندام های بدنی کاملاً متناسبم.",
"69- من در فعالیت های مدرسه ، مسجد، همسایگان و فعالیت های اجتماعی شرکت می کنم.",
"70- من یک دفتر خاطرات روزانه دارم تا اتّفاقات زندگی ام را یادداشت کنم.",
"71- اگر یک قطعه موزیک را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم.",
"72- دوست دارم کتاب ها یا مجلاّتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود.",
"73- اخیراً چیزی نوشته ام که به آن افتخار می کنم.",
"74- وقتی چیزی به روش خاصی اندازه گیری، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.",
"75- من ترجیح می دهم کتاب، مجلاّت و روزنامه هایی را بخوانم که تصاویر زیادی دارند.",
"76- برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای اینکه درباره آن بخوانم یا فیلمی را تماشا کنم.",
"77- من ترجیح می دهم شب تعطیل را در یک میهمانی بگذرانم تا تنها در خانه بمانم.",
"78- من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم.",
"79- اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم یا ضربه می زنم.",
"80- در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد.",

];
let option_text_array = ["به هیچ وجه شبیه من نیست","اندکی شبیه من است", "در حد متوسط شبیه من است",
                          "تا حد زیادی شبیه من است", "کاملا شبیه من است"];
let radio_options = ["radio-op1","radio-op2","radio-op3","radio-op4","radio-op5","radio-op6",
                      "radio-op7","radio-op8","radio-op9","radio-op10"];
let circle_number = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",];
/*----------------------My Code -----------------------*/



function* getHeadings() {
yield   "1- به کتاب و کتابخوانی علاقه دارم.";
yield "2- می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم.";
yield "3- وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم.";
yield "4- من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم.";
yield "5- افراد اغلب با من مشورت می کنند.";
yield "6- من معمولاً زمانی را در تنهایی صرف تفکّر، مراقبه و اندیشیدن در مورد سؤالات مهم زندگی می کنم.";
yield "7- من از صدای دلنشینی برای خواندن برخوردارم.";
yield "8- من همه ی انواع حیوانات را دوست دارم.";
yield "9- قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم.";
yield "10- در مدرسه از درس هایی چون ریاضیات و علوم لذّت می برم.";
yield "11- من نسبت به رنگ ها علاقمند و حساسم.";
yield "12- خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم.";
yield "13- ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.";
yield "14- در جلساتی که به رشد و آگاهی های فردی ام افزوده می شود شرکت می کنم.";
yield "15- آهنگ های ناموزون و سازهای خارج از ریتم را تشخیص می دهم.";
yield "16- دوست دارم چیزهایی را سازمان بندی یا مرتب کنم.";
yield "17- گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد.";
yield "18- از بازی های منطقی، معماها و سایر بازی های فکری (از قبیل شطرنج) لذّت می برم.";
yield "19- اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلم برداری استفاده می کنم.";
yield "20- به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری، مدل سازی و حکّاکی علاقمندم.";
yield "21- وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.";
yield "22- قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم.";
yield "23- اغلب به موزیک هایی از رادیو یا ضبط صوت یا سی دی و غیره گوش می دهم.";
yield "24- من از طبیعت لذّت می برم.";
yield "25- من از بازی با کلمات مانند جدول کلمات متقاطع، جملات درهم ریخته یا اسم رمزها لذّت می برم.";
yield "26- دوست دارم آزمایش هایی (اگر…آنگاه) ترتیب دهم. (مثلاً اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد؟)";
yield "27- من از معماهای دیداری مانند پازل ها و تصاویر سه بعدی لذّت می برم.";
yield "28- بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی(از قبیل پیاده روی، دو، شنا و…) هستم.";
yield "29- من حداقل سه دوست نزدیک و صمیمی دارم.";
yield "30- یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می دهم.";
yield "31- یکی از آلات موسیقی را می نوازم.";
yield "32- من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر، کارت های ورزشی … را جمع می کنم.";
yield "33- من اغراق های زبانی، ایهام، آهنگ های بی معنی و کلمات دوپهلو را دوست دارم.";
yield "34- من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.";
yield "35- در خواب رؤیاهای روشنی می بینم.";
yield "36- اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم.";
yield "37- من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.";
yield "38- اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.";
yield "39- زندگی من بدون موسیقی بسیار یکنواخت و بی هیجان خواهد بود.";
yield "40- من مرتباً گزارش تغییرات هوایی را کنترل می کنم.";
yield "41- دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستند.";
yield "42- درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.";
yield "43- معمولاً قادرم مسیر در یک محل ناآشنا پیدا کنم.";
yield "44- هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها و زبان بدن (مانند تغییر چهره) استفاده کنم.";
yield "45- از آموزش دادن دانسته هایم به دیگران لذّت می برم.";
yield "46- من از طریق عکس العمل دیگران، دیدگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.";
yield "47- اغلب در طی روز مدام یک آهنگ در ذهنم اجرا می شود.";
yield "48- تفاوت های موجود میان انواع درختان، سنگ ها، پرندگان یا سایر گیاهان و جانوران را به خوبی بیان می کنم.";
yield "49- وقتی در ماشین هستم دوست دارم علائم و تابلوهای تبلیغاتی را بخوانم و به آن ها بیشتر از مناظر اطراف توجه کنم.";
yield "50- باور دارم تقریباً برای هر چیزی یک تفسیر منطقی وجود دارد.";
yield "51- من طراحی را دوست دارم و من اغلب طراحی می کنم.";
yield "52- من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آن ها یاد بگیرم.";
yield "53- فکر می کنم قدرت رهبری خوبی دارم و اطرافیان و دوستانم نیز این موضوع را قبول دارند.";
yield "54- من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.";
yield "55- با استفاده از یک ابزار موسیقی ساده به راحتی می توانم اوقات فراغت خود را سپری کنم.";
yield "56- من از ماهیگیری، باغبانی، کاشتن گیاهان و آشپزی لذّت می برم.";
yield "57- اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلاً خوانده یا شنیده ام.";
yield "58- من می توانم به صورت واضح به مفاهیم غیرملموس، انتزاعی و خیالی فکر کنم.";
yield "59- جغرافیا از ریاضی برایم آسان تر است.";
yield "60- من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پرهیجان) لذّت می برم.";
yield "61- من در میان جمع احساس راحتی می کنم.";
yield "62- من با اراده و مستقل هستم.";
yield "63- آهنگ های بسیاری از آوازها یا قطعات موسیقی را می دانم.";
yield "64- از مشاهده رویدادهای طبیعی( مانند ستاره ها، ماه، جزر و مد) لذّت برده و دوست دارم جزئیات اطّلاعات درباره ی آن ها را به دست آورم.";
yield "65- اغلب اطرافیانم معنی کلمات را از من می پرسند.";
yield "66- به کشف عیوب منطقی کارهایی که مردم در خانه و محل کار خود انجام می دهند یا در مورد آن ها صحبت می کنند، علاقه دارم.";
yield "67- می توانم تصور کنم (از نگاه یک پرنده)، اجسام از بالا چگونه به نظر می رسند.";
yield "68- من از نظر جسمی و اندازه اندام های بدنی کاملاً متناسبم.";
yield "69- من در فعالیت های مدرسه ، مسجد، همسایگان و فعالیت های اجتماعی شرکت می کنم.";
yield "70- من یک دفتر خاطرات روزانه دارم تا اتّفاقات زندگی ام را یادداشت کنم.";
yield "71- اگر یک قطعه موزیک را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم.";
yield "72- دوست دارم کتاب ها یا مجلاّتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود.";
yield "73- اخیراً چیزی نوشته ام که به آن افتخار می کنم.";
yield "74- وقتی چیزی به روش خاصی اندازه گیری، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.";
yield "75- من ترجیح می دهم کتاب، مجلاّت و روزنامه هایی را بخوانم که تصاویر زیادی دارند.";
yield "76- برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای اینکه درباره آن بخوانم یا فیلمی را تماشا کنم.";
yield "77- من ترجیح می دهم شب تعطیل را در یک میهمانی بگذرانم تا تنها در خانه بمانم.";
yield "78- من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم.";
yield "79- اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم یا ضربه می زنم.";
yield "80- در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد.";

 
}
let headings = getHeadings();

// let showAlert = () => {
//   alertMessage.style.display = "block";
//   alertMessage.innerHTML = `<p>هیچ گزینه ای انتخاب نکرده اید</p>`;
//   setTimeout(() => {
//     alertMessage.style.display = "none";
//   }, 2000);
// };

// let clicked = 0;
// Array.from(listItem).forEach(item => {
//   item.addEventListener("click", () => {
//     clicked++;
//     console.log(clicked);
//   });
// });

function convert(str){
  if (str === "به هیچ وجه شبیه من نیست"){
    return "1";
  }
  else if(str === "اندکی شبیه من است"){
    return "2";
  }
  else if(str === "در حد متوسط شبیه من است"){
    return "3";
  }
  else if(str === "تا حد زیادی شبیه من است"){
    return "4";
  }
  else if(str === "کاملا شبیه من است"){
    return "5";
  }
}

// let clickOnNext = () => {
//   nextQ_btn.addEventListener("click", () => {
//     if (clicked >= 1) {
//       $("#quiz").slideToggle("slow" , function(){
//         // width += 100/80;
//         // progress.style.width = width+"%";
//         // progress.innerHTML = width + "%";
//         // clicked = 0;
//         let headerValue = headings.next().value;
//
//         if (headerValue === undefined) {
//           Array.from(inputs).forEach(input => {
//             if (input.checked) {
//               // answers.push(input.nextSibling.nextSibling.innerHTML);
//               answers += convert(input.nextSibling.nextSibling.innerHTML);
//             }
//           });
//           heading.textContent = "سوالات به اتمام رسید";
//           list.style.display = "none";
//           buttons.style.display = "none";
//           finish_btn.style.display = "block";
//         } else {
//           Array.from(inputs).forEach(input => {
//             if (input.checked) {
//               // answers.push(input.nextSibling.nextSibling.innerHTML);
//               answers += convert(input.nextSibling.nextSibling.innerHTML);
//             }
//             input.checked = false;
//           });
//           heading.textContent = headerValue;
//           show_q_text();
//         }
//       });
//       $("#quiz").slideToggle("slow");
//     } else if (clicked === 0) {
//       // showAlert();
//     }
//   });
// };

// finish_btn.addEventListener("click", () => {
//
//   location.href = "/calculate_result/" + answers + "/" + user_id ;
//
//
//   // console.log(answers)
//   //   $.ajax({
//   //     type: "POST",
//   //     contentType: "application/json;charset=utf-8",
//   //     url: "/calculate_result/" ,
//   //     traditional: "true",
//   //     data: JSON.stringify({answers}),
//   //     dataType: "json"
//   // });
//
//
// });
// clickOnNext();

/*-------------------------------------------My Code--------------------------------------*/
document.getElementById("c1").style.backgroundColor = "black";
function show_q_text () {
  let q_text = document.getElementsByClassName("q-text");
  for(let i = 0 ; i < 10 ; i++){
    let current_q_text = headings.next().value;
    if (current_q_text == "80- در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد.")
    {
      document.getElementById("nextQ-btn").innerHTML = "مشاهده نتایج";
    }
    q_text[i].innerText = current_q_text;
    
    // if(current_q_text === undefined){
    //   document.getElementById("quiz").style.display = "none";
    //   document.getElementById("nextQ-btn").style.display = "none";
    //   document.getElementById("ind-cont").style.display = "none";
    //   document.getElementById("finish-btn").style.display = "block";
    // }else{
    //   q_text[i].innerText = current_q_text;
    // }
  }
}
show_q_text();

function show_options () {
  let op_el = document.getElementsByClassName("q-options");
  let op_el_length = op_el.length;

  let new_label = [];
  let nl_text = [];
  let new_input = [];
  let new_div = [];
  for(let i = 0 ; i < op_el_length; i++){
    for(let j = 0; j < 5 ; j++){
      new_label[j] = document.createElement("label");
      nl_text[j] = document.createTextNode(option_text_array[j]);
      new_label[j].htmlFor = "o" + (i+1).toString() + (j+1).toString();
      new_label[j].style.paddingRight = "8px";
      new_label[j].appendChild(nl_text[j]);

      new_input[j] = document.createElement("input");
      new_input[j].name = radio_options[i];
      new_input[j].type = "radio";
      new_input[j].id = "o" + (i+1).toString() + (j+1).toString();
      new_input[j].required = "required";

      new_div[j] = document.createElement("div");
      new_div[j].appendChild(new_label[j]);
      new_div[j].appendChild(new_input[j]);

      op_el[i].appendChild(new_div[j]);
    }
  }
}
show_options();

let current_circle = 1;
function clickOnNextPage () {
  document.getElementById("nextQ-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let q_options = document.getElementsByClassName("q-options");
    // let checkNotNull = document.getElementsByName(radio_options[i]);
    let t = 10;
    for (let i = 0; i < 10; i++) {
      // t = false;
      for (let j = 0; j < 5; j++) {
        if (q_options[i].childNodes[j].childNodes[1].checked) {
          t -= 1;
          break;
        }
      }
    }
    if (t==0) {
      if(document.getElementById("nextQ-btn").innerHTML == "مشاهده نتایج")
      {
        let answers_string = "";
        for(let i=0;i<80;i++)
        {
          answers_string += answers[i] ;
        }        
        location.href = "/calculate_result/" + answers_string + "/" + user_id ;
        // location.href = "http://127.0.0.1:8069" ;
      }
      else
      {
        let clear = document.getElementsByTagName("input");
        for (let i = 0; i < clear.length; i++) {
          clear[i].checked = false;
        }
        show_q_text();
        document.getElementById(circle_number[current_circle]).style.backgroundColor = "black";
        document.getElementById(circle_number[current_circle - 1]).style.backgroundColor = "#0000002e";
        current_circle++;
        window.scrollTo(0, 0); 
      }
    } else
      window.alert("لطفا به همه موارد پاسخ دهید.");
  });
}
clickOnNextPage();

function add_new_events() {
  let q_options = document.getElementsByClassName("q-options");
  let o_index;
  let q_index;
  // console.log(q_options[0].childNodes[0].childNodes[0]);
  for(let i = 0 ; i < 10 ; i++){
    for(let j = 0 ; j < 5 ; j++){
      let q_option_number = q_options[i].childNodes[j];
      q_option_number.addEventListener("click", () =>{
        o_index = convert(q_option_number.childNodes[0].innerHTML);
        console.log(o_index);
        q_index = question_id.indexOf(q_options[i].previousElementSibling.innerHTML);
        answers[q_index] = o_index;
        console.log(q_index+1);
        console.log(answers);
      });
    }
  }
}
add_new_events();

function show_result() {
  let result = document.getElementById("finish-btn");
  result.addEventListener("click", () => {
    // console.log(answers);
  })
}
show_result();
