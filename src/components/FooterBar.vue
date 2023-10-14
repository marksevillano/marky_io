<template>
 <div class="footer">
    <div class="pure-menu pure-menu-horizontal">
        <div class="pure-g">
          <div class="pure-u-1-2">
            <div class="icons-container">
              <img src="../assets/images/gmail.svg" class="footer-icon" alt="gmail icon"/>
              <img src="../assets/images/github.svg" class="footer-icon" alt="github icon"/>
              <img src="../assets/images/instagram.svg" class="footer-icon" alt="ig icon"/>
            </div>
          </div>
          <div class="pure-u-1-2 copyright">&#169; marky_io.com</div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.footer, .container:after {
  border-top: solid #2c3e50 0.5px;
  width: 100%;
}
.footer-icon {
  height: 20px;
  width: 20px;
  color: #2c3e50;
  padding: 5px;
}
.icons-container {
  box-sizing: border-box;
  padding: 20px 60px;
}
.copyright {
  box-sizing: border-box;
  font-size: 15px;
  text-align: right;
  padding: 20px 60px;
}
</style>
