<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col  :span="2"><span>迎新配置</span></el-col>
          <el-col :offset="12" :span="4">
            <span>状态</span>
            <el-dropdown @command="handleState">
              <el-button type="primary">
                {{ stateBtn }}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in allStateBtn" :key="index" :command="item" >{{ item }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="4">
            <span>迎新年限</span>
            <el-dropdown @command="handleYear">
              <el-button type="primary">
                {{ yearBtn }}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in allYearBtn" :key="index" :command="item" >{{ item }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" plain @click="add">主要按钮</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          :stripe="true"
          style="width: 100%">
        <el-table-column
          prop="date"
          label="迎新流程名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="迎新年限"
          width="120">
        </el-table-column>
          <el-table-column
            prop="province"
            label="开始时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="结束时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生源类型"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop=""
            label="操作栏"
            width="120">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      stateBtn: '全部状态',
      yearBtn: '全部年限',
      allStateBtn: ['全部状态', '尚未启用', '测试中', '启用中', '进行中','已结束'],
      allYearBtn: ['全部年限', '2018年', '2017年', '2016年'],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    // 选择状态调用
    handleState (command) {
      this.stateBtn = command
    },
    // 选择迎新年限后调用
    handleYear (command) {
      this.yearBtn = command
    },
    // 新增流程按钮
    add () {
      this.$message('添加')
    }
  }
}
</script>