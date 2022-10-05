<template>
  <div>
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="设备编号：">
          <el-input v-model="input" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="result">
      <div>
        <el-button type="warning">新建</el-button>
        <el-button type="info">批量操作</el-button>
      </div>
    </div>

    <div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="设备编号"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="设备型号"
          width="120"
        />
        <el-table-column
          prop="address"
          label="详细地址"
          show-overflow-tooltip
        />
        <el-table-column
          prop="address"
          label="合作商"
          show-overflow-tooltip
        />
        <el-table-column
          prop="address"
          label="设备状态"
          show-overflow-tooltip
        />
        <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VmIndex',
  components: {},
  props: {},
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      input: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  height: 64px;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 17px;
  background-color: #fff;
  ::v-deep .el-form-item {
    margin-bottom: 0px;
  }
  ::v-deep .el-form-item__label {
    font-weight: normal;
  }
}
.result {
    padding: 20px 15px 19px 17px;
    background-color: #fff;
}
</style>
