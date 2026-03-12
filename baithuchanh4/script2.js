const form=document.getElementById("registerForm")
function showError(field,message){
document.getElementById(field+"Error").textContent=message
}
function clearError(field){
    document.getElementById(field+"Error").textContent=""
}
function validateFullname(){
    const name=document.getElementById("fullname").value.trim()
    const regex=/^[A-Za-zÀ-ỹ\s]+$/
if(name.length<3){
    showError("fullname","Tên phải ≥ 3 ký tự")
        return false
}
if(!regex.test(name)){
    showError("fullname","Tên chỉ chứa chữ cái")
        return false
}
    clearError("fullname")
        return true
}
function validateEmail(){
const email=document.getElementById("email").value.trim()
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(email===""){
    showError("email","Email không được trống")
        return false
}
if(!regex.test(email)){
    showError("email","Email không hợp lệ")
        return false
}
    clearError("email")
        return true
}
function validatePhone(){
const phone=document.getElementById("phone").value.trim()
const regex=/^0\d{9}$/
if(!regex.test(phone)){
    showError("phone","SĐT phải 10 số và bắt đầu bằng 0")
        return false
}
    clearError("phone")
        return true
}
function validatePassword(){
const pass=document.getElementById("password").value
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
if(!regex.test(pass)){
    showError("password","Mật khẩu ≥8 ký tự, có chữ hoa, chữ thường, số")
        return false
}
    clearError("password")
        return true
}
function validateConfirmPassword(){
const pass=document.getElementById("password").value
const confirm=document.getElementById("confirmPassword").value
if(pass!==confirm){
    showError("confirmPassword","Mật khẩu không khớp")
        return false
    }
    clearError("confirmPassword")
        return true
    }
function validateGender(){
const gender=document.querySelector('input[name="gender"]:checked')
if(!gender){
    showError("gender","Chọn giới tính")
        return false
}
    clearError("gender")
        return true
}
function validateTerms(){
const terms=document.getElementById("terms").checked
if(!terms){
    showError("terms","Bạn phải đồng ý điều khoản")
        return false
}
    clearError("terms")
        return true
}
form.addEventListener("submit",function(e){
e.preventDefault()
const valid=
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirmPassword() &
validateGender() &
validateTerms()
if(valid){
    const name=document.getElementById("fullname").value
    form.style.display="none"
    document.getElementById("successMessage").textContent="Đăng ký thành công! 🎉 Xin chào "+name
}
})
document.getElementById("fullname").addEventListener("blur",validateFullname)
document.getElementById("email").addEventListener("blur",validateEmail)
document.getElementById("phone").addEventListener("blur",validatePhone)
document.getElementById("password").addEventListener("blur",validatePassword)
document.getElementById("confirmPassword").addEventListener("blur",validateConfirmPassword)
document.querySelectorAll("input").forEach(input=>{
input.addEventListener("input",function(){
    const id=this.id
    if(id){clearError(id)}
}
)
})