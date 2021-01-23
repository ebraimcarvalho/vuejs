<template>
  <div class="progress-bar">
    <div :style="[{width: progress + '%'}]" class="progress-content"></div>
    <div class="progress">
      <p>{{progress}}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { progress: Number},

}
</script>

<style>
.progress-bar {
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 30px;
  position: relative;
  width: 90%;
}

.progress-content {
  height: 40px;
  background-color: rgba(71, 156, 45, 0.842);
}

.progress {
  display: flex;
  font-size: 20px;
  justify-content: center;
  position: absolute;
  top: -12px;
  width: 100%;
}
</style>