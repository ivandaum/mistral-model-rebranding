<script lang="ts">
	import checkmark from '$lib/assets/checkmark.svg';
	import cross from '$lib/assets/cross.svg';
	import Subtitle from '$lib/components/modules/subtitle.svelte';
</script>

<section class="flex w-full max-w-7xl flex-col justify-center px-4">
	<Subtitle headline="Model licenses explained." class="mb-22" />

	<!-- this comes form Mistral page directly -->
	<div class="overflow-x-auto">
		<table class="w-full table-auto border-collapse text-left md:table-fixed">
			<colgroup
				><col class="w-auto md:w-[180px]" /><col class="w-auto md:w-[170px]" /><col
					class="w-auto md:w-[170px]"
				/><col class="w-auto md:w-[170px]" /></colgroup
			><thead
				><tr
					><th
						class="text-foreground border-b border-black px-4 py-[15px] text-base/[13.6px] font-normal"
						><div></div></th
					><th
						class="text-foreground border border-black px-4 py-[15px] text-base/[13.6px] font-normal"
						><div><p><span style="white-space: pre-wrap;">Apache 2.0</span></p></div></th
					><th
						class="text-foreground border border-black px-4 py-[15px] text-base/[13.6px] font-normal"
						><div>
							<p><span style="white-space: pre-wrap;">Mistral research license</span></p>
						</div></th
					><th
						class="text-foreground border border-black px-4 py-[15px] text-base/[13.6px] font-normal"
						><div>
							<p><span style="white-space: pre-wrap;">Mistral commercial license</span></p>
						</div></th
					></tr
				></thead
			><tbody
				><tr class="border-b border-black"
					><td
						class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<div class="max-w-none min-w-[156px] md:max-w-[245px]">
								<p><span style="white-space: pre-wrap;">Access to weights</span></p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
						</div></td
					></tr
				><tr class="border-b border-black"
					><td
						class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<div class="max-w-none min-w-[156px] md:max-w-[245px]">
								<p>
									<span style="white-space: pre-wrap;"
										>Deployment for research purposes and individual usage</span
									>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					></tr
				><tr class="border-b border-black"
					><td
						class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<div class="max-w-none min-w-[156px] md:max-w-[245px]">
								<p>
									<span style="white-space: pre-wrap;"
										>Creation of derivatives (e.g. fine-tuning) for research purposes and individual
										usage</span
									>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]">
								<p>
									<span style="white-space: pre-wrap;">The same license applies to derivatives</span
									>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]">
								<p>
									<span style="white-space: pre-wrap;">The same license applies to derivatives</span
									>
								</p>
							</div>
						</div></td
					></tr
				><tr class="border-b border-black"
					><td
						class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<div class="max-w-none min-w-[156px] md:max-w-[245px]">
								<p>
									<span style="white-space: pre-wrap;"
										>Deployment for commercial purposes (internal &amp; external use cases)</span
									>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="cross-mark"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={cross}
							/>
							<div class="max-w-none md:max-w-[169px]">
								<p>
									<span style="white-space: pre-wrap;">Requires Mistral commercial license</span>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					></tr
				><tr class="border-b border-black"
					><td
						class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<div class="max-w-none min-w-[156px] md:max-w-[245px]">
								<p>
									<span style="white-space: pre-wrap;"
										>Creation and usage of derivatives (e.g. fine-tuning) for commercial use cases</span
									>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="cross-mark"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={cross}
							/>
							<div class="max-w-none md:max-w-[169px]">
								<p>
									<span style="white-space: pre-wrap;">Requires Mistral commercial license</span>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					></tr
				><tr class="false"
					><td
						class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<div class="max-w-none min-w-[156px] md:max-w-[245px]">
								<p>
									<span style="white-space: pre-wrap;"
										>Custom terms &amp; support (self-deployment)</span
									>
								</p>
							</div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="cross-mark"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={cross}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					><td class="text-foreground px-4 pt-5 pb-[63px] text-sm/[14.7px] font-normal"
						><div class="flex w-full items-start gap-10">
							<img
								alt="check-black"
								loading="lazy"
								width="25"
								height="25"
								decoding="async"
								data-nimg="1"
								class="inline-block size-[25px]"
								style="color:transparent"
								src={checkmark}
							/>
							<div class="max-w-none md:max-w-[169px]"></div>
						</div></td
					></tr
				></tbody
			>
		</table>
	</div>
</section>
