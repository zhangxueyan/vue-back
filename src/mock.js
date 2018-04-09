// 使用 Mock
var Mock = require('mockjs')
var Users= Mock.mock({
	"data|10":[{
		"tag|1": ["家","公司"],
		"number|+1": 1,
		// id:()=>Mock.Random.id(),
		name: ()=>Mock.Random.cname(),
		address: ()=>Mock.Random.county(true),
		date: ()=>Mock.Random.date()
		// "age|20-60":20,
        // sex: ()=>Mock.Random.integer(0, 1)
	}]
})
// 输出结果
// console.log(JSON.stringify(Users,null,4))
export { Users };