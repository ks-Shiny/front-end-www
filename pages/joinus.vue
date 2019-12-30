<template>
    <div class="joinus">
        <div class="joinus-banner" />
        <div class="position-list">
            <div
                v-for="(item, index) in list"
                :key="index"
                class="position-item"
            >
                <div class="name m-b-item">
                    {{ item.name }}
                    <span class="subtype"> {{ item.type }} </span>
                </div>
                <div class="sublist m-b-item">
                    岗位职责
                    <ul class="list">
                        <li
                            v-for="(dutyItem, i) in item.duty"
                            :key="i"
                            class="item"
                        >
                            ({{ i + 1 }}){{ dutyItem }}
                        </li>
                    </ul>
                </div>
                <div class="sublist m-b-item">
                    任职要求
                    <ul class="list">
                        <li
                            v-for="(requireItem, i) in item.require"
                            :key="i"
                            class="item"
                        >
                            ({{ i + 1 }}){{ requireItem }}
                        </li>
                    </ul>
                </div>
                <div class="palce m-b-item">
                    工作地点
                    <span class="subdetail">{{ item.place }}</span>
                </div>
                <div class="mail">
                    联系邮箱
                    <span class="subdetail">{{ item.mail }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '高级运维工程师',
                    type: '运维测试类',
                    duty: [
                        '负责业务系统部署方案评估、后台的搭建、部署、监控、故障处理、调优、升级、日常维护和管理工作；',
                        '负责业务服务器系统部署、应用调整和优化，增强系统可用性；',
                        '负责大流量、高并发系统下服务器系统部署方案的运维保障；',
                    ],
                    require: [
                        '有2年以上运维和服务器集群管理经验；',
                        '熟练使用Linux/unix操作系统；',
                        '精通Shell编程，并熟练掌握Perl、PHP、Python之一的脚本编程；',
                        '熟悉TCP/IP、HTTP等协议，有良好的网络、存储、安全、计算机体系结构方面的知识；',
                        '熟悉Linux系统、Nginx、PHP、IPTABLES等，了解cvm，docker等虚拟化技术；',
                        '熟悉MySQL、Redis、MongoDB运维及云平台日常操作；',
                        '熟练使用阿里云、百度云等云平台，具备公有云相关运维经验优先考虑；',
                        '熟练掌握docker相关技术，有docker平台开发或运维管理经验者优先；',
                        '掌握Kubernetes等编排服务框架者优先；',
                        '对运维工作兴趣浓厚，具备较强的运维技能；',
                    ],
                    place: '北京',
                    mail: 'yumeng@wdcloud.cc',
                },
                {
                    name: '高级运维工程师',
                    type: '运维测试类',
                    duty: [
                        '负责业务系统部署方案评估、后台的搭建、部署、监控、故障处理、调优、升级、日常维护和管理工作；',
                        '负责业务服务器系统部署、应用调整和优化，增强系统可用性；',
                        '负责大流量、高并发系统下服务器系统部署方案的运维保障；',
                    ],
                    require: [
                        '有2年以上运维和服务器集群管理经验；',
                        '熟练使用Linux/unix操作系统；',
                        '精通Shell编程，并熟练掌握Perl、PHP、Python之一的脚本编程；',
                        '熟悉TCP/IP、HTTP等协议，有良好的网络、存储、安全、计算机体系结构方面的知识；',
                        '熟悉Linux系统、Nginx、PHP、IPTABLES等，了解cvm，docker等虚拟化技术；',
                        '熟悉MySQL、Redis、MongoDB运维及云平台日常操作；',
                        '熟练使用阿里云、百度云等云平台，具备公有云相关运维经验优先考虑；',
                        '熟练掌握docker相关技术，有docker平台开发或运维管理经验者优先；',
                        '掌握Kubernetes等编排服务框架者优先；',
                        '对运维工作兴趣浓厚，具备较强的运维技能；',
                    ],
                    place: '北京',
                    mail: 'yumeng@wdcloud.cc',
                },
            ],
        };
    },
};
</script>
<style lang="less">
.joinus {
  .joinus-banner {
    width: 100%;
    height: 450px;
    background: #834dfa url(/images/joinus.jpg) no-repeat left top/100% 450px;
  }
  .m-b-item {
    margin-bottom: 24px;
  }
  .position-list {
    margin: 67px auto 50px 360px;
    .position-item {
      margin-bottom: 116px;
      &:last-child {
        margin-bottom: 0px;
      }
      font-size: 18px;
      line-height: 25px;
      color: #fff;
      .subtype {
        color: #a6a6a6;
        margin-top: 8px;
        display: block;
        font-size: 12px;
      }
      .list {
        margin-top: 8px;
        list-style: none;
        .item {
          line-height: 26px;
          color: #d9d9d9;
          font-size: 14px;
        }
      }
      .subdetail {
        font-size: 14px;
        line-height: 26px;
        margin-top: 16px;
        display: block;
      }
    }
  }
}
</style>
