<script lang="ts">
	import { onMount } from 'svelte';

	import { observer } from '$lib/utils/observer';

	import checkmark from '$lib/assets/checkmark.svg';
	import cross from '$lib/assets/cross.svg';

	import Subtitle from '$lib/components/modules/subtitle.svelte';
	import { cn } from '$lib/utils/cn';
	import { MODEL_LICENCES } from '$lib/data/wording';

	let element: HTMLElement | undefined = $state();
	let show = $state(false);

	onMount(() => {
		if (!element) return;

		const obs = observer({
			element,
			rootMargin: '0px 0px -250px 0px',
			onShow: () => (show = true)
		});

		return () => {
			obs.destroy();
		};
	});
</script>

<section class="flex w-full max-w-7xl flex-col justify-center px-4">
	<Subtitle heading="h3" headline="Model licenses explained." class="my-15" />

	<!-- this comes form Mistral page directly -->
	<div
		class={cn('overflow-x-auto', {
			'[&_tr]:opacity-0': !show
		})}
		bind:this={element}
	>
		<table class="w-full table-auto border-collapse text-left md:table-fixed">
			<colgroup>
				<col class="w-auto md:w-[180px]" />
				<col class="w-auto md:w-[170px]" />
				<col class="w-auto md:w-[170px]" />
				<col class="w-auto md:w-[170px]" />
			</colgroup>
			<thead>
				<tr>
					<th
						class="text-foreground border-b border-black px-4 py-[15px] text-base/[13.6px] font-normal"
					>
						<div></div>
					</th>
					<th
						class="text-foreground border border-black px-4 py-[15px] text-base/[13.6px] font-normal"
					>
						<div>
							<p>
								<span style="white-space: pre-wrap;">Apache 2.0</span>
							</p>
						</div>
					</th>
					<th
						class="text-foreground border border-black px-4 py-[15px] text-base/[13.6px] font-normal"
					>
						<div>
							<p>
								<span style="white-space: pre-wrap;">Mistral research license</span>
							</p>
						</div>
					</th>
					<th
						class="text-foreground border border-black px-4 py-[15px] text-base/[13.6px] font-normal"
					>
						<div>
							<p>
								<span style="white-space: pre-wrap;">Mistral commercial license</span>
							</p>
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each MODEL_LICENCES as row, i}
					<tr
						class="border-b border-black transition-opacity delay-(--delay) duration-500"
						style={`--delay:${i * 50}ms`}
					>
						{#each row as content}
							<td
								class="text-foreground bg-mistral-beige-deep px-4 pt-5 pb-[63px] text-left text-sm/[14.7px] font-normal"
							>
								<div class="flex w-full items-start gap-6">
									{#if content.match('{checkmark}')}
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
									{/if}
									{#if content.match('{cross}')}
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
									{/if}
									<p class="max-w-none min-w-[156px] md:max-w-[245px]">
										<span style="white-space: pre-wrap;">
											{@html content.replace(/{checkmark}|{cross}/, '')}
										</span>
									</p>
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
