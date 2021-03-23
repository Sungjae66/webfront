<template>
  <div class="loginWrapper">
    <div class="main">
      <div class="loginForm">
        <el-form ref="ruleForm" :model="ruleForm" label-width="80px" status-icon :rules="rules">
          <div class="form_content">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
            </el-form-item>
          </div>
        
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 4, max: 12, message: '密码错误，请重新输入', trigger: 'blur'},

          ]
        }
      }
    },
    methods: {

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('/user')
                .then((res) => {
                  var data = res.data.data.data;
                  for (let i = 0; i < data.length; i++) {
                    if (data[i].username == this.ruleForm.username && data[i].password == this.ruleForm.password) {
                      this.$message({
                        message: '登陆成功',
                        type: 'success',
                        duration: 1500,
                        onClose: () => {
                          this.$store.commit('SET_TOKEN', 'fdsfsdfsdfsd')
                          this.$store.commit('SET_USER', this.ruleForm.username)
                          this.$router.push('/index')
                        }
                      });
                    } else {
                      this.$message.error('登录错误!');
                    }
                  }
                })
                .catch((err) => {
                  console.log('调用失败', err)
                })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      login() {
        this.$router.push({name: 'Index'})
      },

    }

  }
</script>

<style lang="less">
  .loginWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('~@/assets/img/loginBg.jpg') no-repeat center center;
    
    .main {
      width: 100%;
      height: 100%;
      background-color: rgba(32, 54, 86, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      
      .loginForm {
        width: 40%;
        height: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .el-form {
          width: 60%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          
          .form_content {
            width: 100%;
            
            .el-form-item:last-child {
              button {
                width: 100%;
              }
            }
          }
        }
      }
    }
    
  }
</style>
