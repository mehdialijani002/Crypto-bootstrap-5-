const demo = document.querySelector("#demo-none");
demo.addEventListener("click", function () {
  form.reset();
});

function checkOutput() {
  const to = document.querySelector("#to");
  const full = document.querySelectorAll(".bg-danger");
  const amountInput = document.getElementById("amount");

  if (amountInput.value === "") {
    toastr.error(
      "<span class='font-alert'>لطفا مقدار مورد نظر را وارد کنید</span>"
    );
    return;
  }
  let selectedOption = to.value;
  let selectedOption1 = full.value;
  let isValidOption = false;
  full.forEach((option) => {
    if (option.value === selectedOption) {
      isValidOption = true;
    }
  });
  if (!isValidOption) {
    toastr.error(
      "<span class='font-alert'>لطفا ارز دیجیتال  خود را وارد کنید.</span>"
    );

    toastr.info(
      "<span class='font-alert'>اطلاعات جدول شما حذف شد.لطفا جدول را درست کامل کنید</span>"
    );

    return;
  }
  if (isValidOption && amountInput.value !== "") {
    toastr.success(
      "<span class='font-alert'>تبدیل شما با موفقیت انجام شد</span>"
    );
  }
}
const lastInput = document.getElementById("success");
const form = document.querySelector(".form");
lastInput.addEventListener("click", function () {
  form.reset();
});

const toggles = document.querySelectorAll(".faq-toggle,.faq-title");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

function myFunction1() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo1").innerHTML;
}

function myFunction2() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo2").innerHTML;
}

function myFunction3() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo3").innerHTML;
}

function myFunction4() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo4").innerHTML;
}

function myFunction5() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo5").innerHTML;
}

function myFunction6() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo6").innerHTML;
}

const scrollButtons = document.querySelectorAll("#scrollButton");
const forms = document.querySelector(".convert");

scrollButtons.forEach(function (scrollButton) {
  scrollButton.addEventListener("click", function () {
    forms.scrollIntoView({ behavior: "smooth" });
  });
});
