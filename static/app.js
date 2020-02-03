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

var progress = document.getElementById("progress_id");
var width =0 ;





function* getHeadings() {
  yield "می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم."
  // yield "وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم." 
  // yield "من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم." 
  // yield "افراد اغلب با من مشورت می کنند." 
  // yield "من معمولاً زمانی را در تنهایی صرف تفکّر، مراقبه و اندیشیدن در مورد سؤالات مهم زندگی می کنم." 
  // yield "من از صدای دلنشینی برای خواندن برخوردارم." 
  // yield "من همه ی انواع حیوانات را دوست دارم." 
  // yield "قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم." 
  // yield "در مدرسه از درس هایی چون ریاضیات و علوم لذّت می برم." 
  // yield "من نسبت به رنگ ها علاقمند و حساسم." 
  // yield "خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم." 
  // yield "ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم." 
  // yield "در جلساتی که به رشد و آگاهی های فردی ام افزوده می شود شرکت می کنم." 
  // yield "آهنگ های ناموزون و سازهای خارج از ریتم را تشخیص می دهم." 
  // yield "دوست دارم چیزهایی را سازمان بندی یا مرتب کنم." 
  // yield "گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد." 
  // yield "از بازی های منطقی، معماها و سایر بازی های فکری (از قبیل شطرنج) لذّت می برم." 
  // yield "اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلم برداری استفاده می کنم." 
  // yield "به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری، مدل سازی و حکّاکی علاقمندم." 
  // yield "وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم." 
  // yield "قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم." 
  // yield "اغلب به موزیک هایی از رادیو یا ضبط صوت یا سی دی و غیره گوش می دهم." 
  // yield "من از طبیعت لذّت می برم." 
  // yield "من از بازی با کلمات مانند جدول کلمات متقاطع، جملات درهم ریخته یا اسم رمزها لذّت می برم." 
  // yield "دوست دارم آزمایش هایی (اگر…آنگاه) ترتیب دهم. (مثلاً اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد؟)" 
  // yield "من از معماهای دیداری مانند پازل ها و تصاویر سه بعدی لذّت می برم." 
  // yield "بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی(از قبیل پیاده روی، دو، شنا و…) هستم." 
  // yield "من حداقل سه دوست نزدیک و صمیمی دارم."
  // yield "یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می دهم." 
  // yield "یکی از آلات موسیقی را می نوازم." 
  // yield "من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر، کارت های ورزشی … را جمع می کنم."
  // yield "من اغراق های زبانی، ایهام، آهنگ های بی معنی و کلمات دوپهلو را دوست دارم." 
  // yield "من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم." 
  // yield "در خواب رؤیاهای روشنی می بینم." 
  // yield "اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم." 
  // yield "من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید." 
  // yield "اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم." 
  // yield "زندگی من بدون موسیقی بسیار یکنواخت و بی هیجان خواهد بود." 
  // yield "من مرتباً گزارش تغییرات هوایی را کنترل می کنم." 
  // yield "دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستند." 
  // yield "درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم." 
  // yield "معمولاً قادرم مسیر در یک محل ناآشنا پیدا کنم." 
  // yield "هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها و زبان بدن (مانند تغییر چهره) استفاده کنم." 
  // yield "از آموزش دادن دانسته هایم به دیگران لذّت می برم." 
  // yield "من از طریق عکس العمل دیگران، دیدگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم." 
  // yield "اغلب در طی روز مدام یک آهنگ در ذهنم اجرا می شود." 
  // yield "تفاوت های موجود میان انواع درختان، سنگ ها، پرندگان یا سایر گیاهان و جانوران را به خوبی بیان می کنم." 
  // yield "وقتی در ماشین هستم دوست دارم علائم و تابلوهای تبلیغاتی را بخوانم و به آن ها بیشتر از مناظر اطراف توجه کنم." 
  // yield "باور دارم تقریباً برای هر چیزی یک تفسیر منطقی وجود دارد." 
  // yield "من طراحی را دوست دارم و من اغلب طراحی می کنم." 
  // yield "من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آن ها یاد بگیرم." 
  // yield "فکر می کنم قدرت رهبری خوبی دارم و اطرافیان و دوستانم نیز این موضوع را قبول دارند." 
  // yield "من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم." 
  // yield "با استفاده از یک ابزار موسیقی ساده به راحتی می توانم اوقات فراغت خود را سپری کنم." 
  // yield "من از ماهیگیری، باغبانی، کاشتن گیاهان و آشپزی لذّت می برم."
  // yield "اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلاً خوانده یا شنیده ام." 
  // yield "من می توانم به صورت واضح به مفاهیم غیرملموس، انتزاعی و خیالی فکر کنم." 
  // yield "جغرافیا از ریاضی برایم آسان تر است." 
  // yield "من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پرهیجان) لذّت می برم." 
  // yield "من در میان جمع احساس راحتی می کنم." 
  // yield "من با اراده و مستقل هستم." 
  // yield "آهنگ های بسیاری از آوازها یا قطعات موسیقی را می دانم." 
  // yield "از مشاهده رویدادهای طبیعی( مانند ستاره ها، ماه، جزر و مد) لذّت برده و دوست دارم جزئیات اطّلاعات درباره ی آن ها را به دست آورم." 
  // yield "اغلب اطرافیانم معنی کلمات را از من می پرسند." 
  // yield "به کشف عیوب منطقی کارهایی که مردم در خانه و محل کار خود انجام می دهند یا در مورد آن ها صحبت می کنند، علاقه دارم." 
  // yield "می توانم تصور کنم (از نگاه یک پرنده)، اجسام از بالا چگونه به نظر می رسند." 
  // yield "من از نظر جسمی و اندازه اندام های بدنی کاملاً متناسبم." 
  // yield "من در فعالیت های مدرسه ، مسجد، همسایگان و فعالیت های اجتماعی شرکت می کنم." 
  // yield "من یک دفتر خاطرات روزانه دارم تا اتّفاقات زندگی ام را یادداشت کنم." 
  // yield "اگر یک قطعه موزیک را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم." 
  // yield "دوست دارم کتاب ها یا مجلاّتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود." 
  // yield "اخیراً چیزی نوشته ام که به آن افتخار می کنم." 
  // yield "وقتی چیزی به روش خاصی اندازه گیری، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم." 
  // yield "من ترجیح می دهم کتاب، مجلاّت و روزنامه هایی را بخوانم که تصاویر زیادی دارند." 
  // yield "برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای اینکه درباره آن بخوانم یا فیلمی را تماشا کنم." 
  // yield "من ترجیح می دهم شب تعطیل را در یک میهمانی بگذرانم تا تنها در خانه بمانم." 
  // yield "من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم." 
  // yield "اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم یا ضربه می زنم." 
  // yield "در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد."

  
}
let headings = getHeadings();

let showAlert = () => {
  alertMessage.style.display = "block";
  alertMessage.innerHTML = `<p>هیچ گزینه ای انتخاب نکرده اید</p>`;
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 2000);
};


let clicked = 0;
Array.from(listItem).forEach(item => {
  item.addEventListener("click", () => {
    clicked++;
  });
});

function convert(str){
  if (str == "به هیچ وجه شبیه من نیست"){
    return "1";
  }
  else if(str == "اندکی شبیه من است"){
    return "2";
  }
  else if(str == "در حد متوسط شبیه من است"){
    return "3";
  }
  else if(str == "تا حد زیادی شبیه من است"){
    return "4";
  }
  else if(str == "کاملا شبیه من است"){
    return "5";
  }
}







let clickOnNext = () => {
  nextQ.addEventListener("click", () => {
    if (clicked >= 1) {
      
      $("#quiz").slideToggle("slow" , function(){

        width += 100/80;
        progress.style.width = width+"%";
        // progress.innerHTML = width + "%";
  
  
  
        clicked = 0;
        let headerValue = headings.next().value;
        if (headerValue === undefined) {
          Array.from(inputs).forEach(input => {
            if (input.checked) {
              // answers.push(input.nextSibling.nextSibling.innerHTML);
              answers += convert(input.nextSibling.nextSibling.innerHTML);
            }
          });
          heading.textContent = "سوالات به اتمام رسید";
          list.style.display = "none";
          buttons.style.display = "none";
          finish_btn.style.display = "block";
        } else {
          Array.from(inputs).forEach(input => {
            if (input.checked) {
              // answers.push(input.nextSibling.nextSibling.innerHTML);
              answers += convert(input.nextSibling.nextSibling.innerHTML);
            }
            input.checked = false;
          });
          heading.textContent = headerValue;
        }



      });
       


     

      $("#quiz").slideToggle("slow");


    } else if (clicked === 0) {
      showAlert();
    }
  });
};




finish_btn.addEventListener("click", () => {
  
  location.href = "/calculate_result/" + answers + "/" + user_id ;


  // console.log(answers)
  //   $.ajax({
  //     type: "POST",
  //     contentType: "application/json;charset=utf-8",
  //     url: "/calculate_result/" ,
  //     traditional: "true",
  //     data: JSON.stringify({answers}),
  //     dataType: "json"
  // });


})
clickOnNext();
