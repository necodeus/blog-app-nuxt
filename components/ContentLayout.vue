<template>
    <div class="www">
        <slot name="header"></slot>
        <div class="ccc">
            <div class="mmm">
                <slot></slot>
            </div>
            <div class="sidebar">
                <div class="left">
                    <slot name="leftSidebar"></slot>
                </div>
                <div class="right">
                    <slot name="rightSidebar"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .www {
    height: calc(100vh - 50px);
  }
  .header {
    height: 50px;
  }
  .ccc {
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    position: relative;
    flex-direction: column;
  }
  .mmm {
    width: 100%;
    margin-left: 0;
  }
  .sidebar {
    width: 100%;
    height: auto;
    overflow: auto;
  }
  @media (min-width: 1100px) {
    .ccc {
      flex-direction: row;
    }
    .mmm {
      margin-left: 0;
      width: calc(100% - 300px);
      z-index: 1;
      overflow: auto;
      height: calc(100vh - 50px);
    }
    .sidebar {
      width: 300px;
      height: calc(100vh - 50px);
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }
    .sidebar .left {
      height: auto;
      overflow: auto;
    }
    .sidebar .right {
      height: auto;
      overflow: auto;
    }
  }
  @media (min-width: 1400px) {
    .mmm {
      margin-left: 300px;
      width: calc(100% - 600px);
    }
    .sidebar {
      position: absolute;
      width: 100%;
      height: calc(100vh - 50px);
      overflow: none;
      border: none;
    }
    .sidebar .left {
      position: absolute;
      left: 0;
      width: 300px;
      height: calc(100vh - 50px);
      overflow: auto;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }
    .sidebar .right {
      position: absolute;
      right: 0;
      width: 300px;
      height: calc(100vh - 50px);
      overflow: auto;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }
  }
</style>
